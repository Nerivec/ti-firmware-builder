// znp_tirtos7_ticlang.syscfg
// Number of devices which have associated directly through the coordinator
// This does not determine the upper limit in the number of nodes in the network, 
// just the upper limit for number of nodes directly connected to a certain routing node
zstack.network.nwkMaxDeviceList = 50;
// Determines the maximum number of “secure partners” that the network Trust Center (ZC) can support. 
// This value will be the upper limit of Zigbee 3.0 devices which are allowed in the network
zstack.network.zdsecmgrTcDeviceMax = 200;
// The number of simultaneous route discoveries in network
zstack.advanced.routing.maxRouteReqEntries = 40;
// Increase by 1 to compensate for lag (default is 7)
zstack.advanced.routing.nwkIndirectMsgTimeout = 8;
zstack.advanced.packetSending.macFrameRetries = 7;
zstack.advanced.packetSending.nwkDataRetries = 4;
// Reduce the APS ack wait duration from 6000 ms to 1000 ms.
// This will make requests timeout quicker, in pratice the default timeout of 6000ms is too long.
zstack.advanced.packetSending.apsAckWaitDurationPolled = 1000;
