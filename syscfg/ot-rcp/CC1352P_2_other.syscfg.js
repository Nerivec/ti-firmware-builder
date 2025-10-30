// CC1352P_2_other

Device.enableDCDC = false;
Device.enableBootloader = true;
Device.enableBootloaderBackdoor = true;
Device.levelBootloaderBackdoor = "Active low";
Device.dioBootloaderBackdoor = 15;
Device.xoscCapArrayDelta = 0xfa;

RFCustom.radioConfigieee154.txPower = "5";
RFCustom.radioConfigieee154.highPA = true;
RFCustom.radioConfigieee154.txPowerHi = "20";

// TODO: not working, currently set in workflow directly
// CONFIG_RF_24GHZ
// RF.rfAntennaPin0.$assignAllowConflicts = "DIO_6";
// CONFIG_RF_HIGH_PA
// RF.rfAntennaPin1.$assignAllowConflicts = "DIO_5";
