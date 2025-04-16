// znp_CC1352P_2_LAUNCHXL_tirtos7_ticlang
scripting.excludeFromBuild("ti_radio_config.c");
scripting.excludeFromBuild("ti_radio_config.h");
// scripting.excludeFromBuild("ti_drivers_config.h");

device.dioBootloaderBackdoor = 15;
device.xoscCapArrayDelta = 0xc1;

NVS1.internalFlash.regionSize = 0x6000;
NVS1.internalFlash.regionBase = 0x50000;

zstack.rf.radioConfig.highPA = true;
