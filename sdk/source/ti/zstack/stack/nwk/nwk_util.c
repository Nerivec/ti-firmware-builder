#include "nwk_util.h"
#include "aps_mede.h"

#ifndef NWK_MAX_CHILD_AGING_LEAVE_DISABLED_ENTRIES
#define NWK_MAX_CHILD_AGING_LEAVE_DISABLED_ENTRIES 50
#endif

typedef struct
{
    uint8_t extAddr[Z_EXTADDR_LEN];
    uint8_t numBytesToMatch;
} child_aging_leave_disabled_entry_t;

child_aging_leave_disabled_entry_t childAgingLeaveDisabledList[NWK_MAX_CHILD_AGING_LEAVE_DISABLED_ENTRIES];
uint8_t chidlAgingLeaveDisabledCnt = 0;

uint8_t NwkDisableChildAgingLeaveAdd(uint8_t* extAddr, uint8_t numBytesToMatch)
{
    if (chidlAgingLeaveDisabledCnt == NWK_MAX_CHILD_AGING_LEAVE_DISABLED_ENTRIES) {
        return 1;
    }

    memcpy(childAgingLeaveDisabledList[chidlAgingLeaveDisabledCnt].extAddr, extAddr, Z_EXTADDR_LEN);
    childAgingLeaveDisabledList[chidlAgingLeaveDisabledCnt].numBytesToMatch = numBytesToMatch;
    ++chidlAgingLeaveDisabledCnt;

    return 0;
}

void NwkNotMyChildSendLeaveCustom(uint16_t dstAddr)
{
    uint8_t extAddr[Z_EXTADDR_LEN];
    uint8_t idx;

    if (!APSME_LookupExtAddr(dstAddr, extAddr)) {
        return;
    }

    // Do not send leave request to devices where it is disabled for
    for (idx = 0; idx < chidlAgingLeaveDisabledCnt; ++idx)
    {
        uint8_t offset = Z_EXTADDR_LEN - childAgingLeaveDisabledList[idx].numBytesToMatch;
        if (memcmp(childAgingLeaveDisabledList[idx].extAddr + offset, extAddr + offset, childAgingLeaveDisabledList[idx].numBytesToMatch) == 0) {
            return;
        }
    }

    NwkNotMyChildSendLeave (dstAddr);
};
