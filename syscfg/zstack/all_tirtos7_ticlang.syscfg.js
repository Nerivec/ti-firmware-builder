// all_tirtos7_ticlang.syscfg
device.enableDCDC = false;
device.enableBootloader = true;
device.enableBootloaderBackdoor = true;
device.levelBootloaderBackdoor = "Active low";

// overridden in device-specific syscfg as needed
zstack.rf.txPower = "5";

zstack.advanced.routing.routeExpiryTime = 2;
// Number of devices in the standard Routing Table, which is used for AODV routing.
// Only stores information for 1-hop routes, so this table does not need to be as big as the Source Route table.
zstack.advanced.tableSize.routingTableSize = 150;
