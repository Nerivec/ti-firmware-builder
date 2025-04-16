// zr_genericapp_CC1352P_2_other_tirtos7_ticlang
scripting.excludeFromBuild("ti_radio_config.c");
scripting.excludeFromBuild("ti_radio_config.h");

device.dioBootloaderBackdoor = 15;
device.xoscCapArrayDelta = 0xfa;

NVS1.internalFlash.regionSize = 0x6000;
NVS1.internalFlash.regionBase = 0x50000;

zstack.rf.radioConfig.highPA = true;

// TODO: not working, currently set in workflow directly
// CONFIG_RF_24GHZ
// RF.rfAntennaPin0.$assignAllowConflicts = "DIO_6";
// CONFIG_RF_HIGH_PA
// RF.rfAntennaPin1.$assignAllowConflicts = "DIO_5";
