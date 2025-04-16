// Increase MAC buffers, multiplied default value by 10
#undef MAC_CFG_TX_DATA_MAX
#define MAC_CFG_TX_DATA_MAX 50
#undef MAC_CFG_TX_MAX
#define MAC_CFG_TX_MAX 80 
#undef MAC_CFG_RX_MAX
#define MAC_CFG_RX_MAX 50

// From https://www.ti.com/lit/an/swra650b/swra650b.pdf
#define LINK_DOWN_TRIGGER 12
#define NWK_ROUTE_AGE_LIMIT 5
#define DEF_NWK_RADIUS 15
#define DEFAULT_ROUTE_REQUEST_RADIUS 8
#define ZDNWKMGR_MIN_TRANSMISSIONS 0
#define ROUTE_DISCOVERY_TIME 13
#define MTO_RREQ_LIMIT_TIME 5000

// Increase NV pages to allow for bigger device tables not for `CC2674P10` as it has 5 pages by default.
#ifndef EM_CC2674P10_LP
    #undef NVOCMP_NVPAGES
    #define NVOCMP_NVPAGES 3
#endif

// Increase the max number of boardcasts, the default broadcast delivery time is 3 seconds
// with the value below this will allow for 1 broadcast every 0.15 second
#define MAX_BCAST 30

//  Determines the maximum number of devices in the Neighbor Table.
#define MAX_NEIGHBOR_ENTRIES 50

#ifdef IS_COORDINATOR
    // Firmware version, used in mt_version.c
    #define CODE_REVISION_NUMBER 00000000

    // Required, otherwise firmware crashes after some uptime in some cases.
    #define NVOCMP_RECOVER_FROM_COMPACT_FAILURE

    // Required in order to use the extended MT API commands.
    #define FEATURE_NVEXID 1

    // Grants access to the security key data
    #define MT_SYS_KEY_MANAGEMENT 1

    // Disabling MULTICAST is required in order for proper group support.
    // If MULTICAST is not disabled, the group adress is not included in the APS header
    #define MULTICAST_ENABLED FALSE

    // Enable MTO routing
    // MTO Routing will be used in addition to the standard AODV routing to provide additional route discovery opportunities.
    // Especially useful for larger networks with multiple hops.
    #define CONCENTRATOR_ENABLE TRUE
    #define CONCENTRATOR_ROUTE_CACHE TRUE
    #define CONCENTRATOR_DISCOVERY_TIME 60
    #define MAX_RTG_SRC_ENTRIES 250
    #define SRC_RTG_EXPIRY_TIME 10

    // Size of the conflicted address table
    #define CONFLICTED_ADDR_TABLE_SIZE 15
#endif

#ifdef IS_ROUTER
    #define ZCL_GENERIC_APP_SW_BUILD_ID { 8, '0','0','0','0','0','0','0','0' }
    #define ZCL_REPORT_DESTINATION_DEVICE
    #define BDB_REPORTING
    #define CUI_DISABLE
    #define ZDO_API_ADVANCED
    #define ATTRID_BASIC_TRANSMIT_POWER 0x1337
#endif
