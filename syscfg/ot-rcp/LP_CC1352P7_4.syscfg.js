// LP_CC1352P7_4

Device.enableDCDC = false;
Device.enableBootloader = true;
Device.enableBootloaderBackdoor = true;
Device.levelBootloaderBackdoor = "Active low";
Device.dioBootloaderBackdoor = 15;

RFCustom.radioConfigieee154.txPower = "5";
RFCustom.radioConfigieee154.highPA = true;
RFCustom.radioConfigieee154.txPowerHi = "10";
