AESECB.interruptPriority = "7"; // type: string
DMA.dmaImplementation = "UDMACC26XX"; // type: string
DMA.dmaErrorFunction = "dmaErrorFxn"; // type: string
DMA.interruptPriority = "7"; // type: string
Device.enableCodeGeneration = true; // type: boolean
Device.forceVddr = false; // type: boolean
Device.enableDCDC = true; // type: boolean
Device.srcClkLF = "LF RCOSC"; // type: string
Device.extClkDio = 1; // type: number
Device.rtcIncrement = 8388608; // type: number
Device.xoscCapArray = false; // type: boolean
Device.xoscCapArrayDelta = 255; // type: number
Device.srcClkHF = "Internal High Precision Oscillator"; // type: string
Device.tcxoType = "CMOS Type"; // type: string
Device.tcxoMaxStartup = 127; // type: number
Device.enableXoscHfComp = true; // type: boolean
Device.useFcfgXoscHfInsertion = false; // type: boolean
Device.xoscSinglePointCalibration = ""; // type: string
Device.enableXoscLfComp = false; // type: boolean
Device.RTCCustomXOSCLFCoeff = false; // type: boolean
Device.rtcXOSCLFCoefficientA = -0.035; // type: number
Device.rtcXOSCLFCoefficientB = 1.75; // type: number
Device.rtcXOSCLFCoefficientC = -21.875; // type: number
Device.enableBootloader = true; // type: boolean
Device.enableBootloaderBackdoor = true; // type: boolean
Device.dioBootloaderBackdoor = 13; // type: number
Device.levelBootloaderBackdoor = "Active low"; // type: string
Device.configureIEEE = false; // type: boolean
Device.addressIEEE = "ff:ff:ff:ff:ff:ff:ff:ff"; // type: string
Device.configureBLE = false; // type: boolean
Device.addressBLE = "ff:ff:ff:ff:ff:ff:ff:ff"; // type: string
Device.disableCache = false; // type: boolean
Device.setFlashVectorTable = false; // type: boolean
Device.addressFlashVectorTable = 0; // type: number
Device.disableRamParity = false; // type: boolean
Device.markAllFlashSecure = false; // type: boolean
Device.lockNonSecureVectorTableBaseAddress = false; // type: boolean
Device.lockSecureInterruptConfig = false; // type: boolean
Device.lockSAURegions = false; // type: boolean
Device.lockNonSecureMPU = false; // type: boolean
Device.lockSecureMPU = false; // type: boolean
Device.disableSecureNonInvasiveDebug = false; // type: boolean
Device.disableSecureInvasiveDebug = false; // type: boolean
Device.FailureAnalysis = false; // type: boolean
Device.FailureAnalysisCustomerKey = false; // type: boolean
Device.FailureAnalysisCustomerKeyValue = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"; // type: string
Device.CpuDap = true; // type: boolean
Device.PwrprofTap = true; // type: boolean
Device.TestTap = false; // type: boolean
Device.Pbist2Tap = false; // type: boolean
Device.Pbist1Tap = false; // type: boolean
Device.AonTap = false; // type: boolean
ECDH.interruptPriority = "7"; // type: string
ECDSA.interruptPriority = "7"; // type: string
ECDSA.trngInterruptPriority = "7"; // type: string
ECJPAKE.interruptPriority = "7"; // type: string
GPIO.gpioImplementation = "GPIOCC26XX"; // type: string
GPIO.interruptPriority = "7"; // type: string
Power.powerImplementation = "PowerCC26X2"; // type: string
Power.enablePolicy = true; // type: boolean
Power.policyFunction = "PowerCC26XX_standbyPolicy"; // type: string
Power.policyCustomFunction = "customPolicyFxn"; // type: string
Power.policyInitFunction = "Not Required"; // type: string
Power.policyInitCustomFunction = "customPolicyInitFxn"; // type: string
Power.calibrateFunction = "PowerCC26XX_calibrate"; // type: string
Power.calibrateRCOSC_LF = true; // type: boolean
Power.calibrateRCOSC_HF = true; // type: boolean
Power.vddrRechargeMargin = 0; // type: number
Power.enableTCXOFunction = ""; // type: string
Power.loggingEnabled = false; // type: boolean
RF.pinSelectionAntenna = 0; // type: number
RF.coexEnable = false; // type: boolean
RF.coexPhy = ["ble"]; // type: string[]
RF.coexMode = "coexMode3Wire"; // type: string
RF.coexPinRequestIdleLevel = 0; // type: number
RF.coexPinPriorityIdleLevel = 0; // type: number
RF.coexPinPriorityIndicationTime = 20; // type: number
RF.coexPinGrantIdleLevel = 1; // type: number
RF.coexGrantLatencyTime = 60; // type: number
RF.bleIniDefaultPriority = 0; // type: number
RF.bleIniAssertRequestForRx = true; // type: boolean
RF.bleConDefaultPriority = 0; // type: number
RF.bleConAssertRequestForRx = true; // type: boolean
RF.bleBroDefaultPriority = 0; // type: number
RF.bleBroAssertRequestForRx = true; // type: boolean
RF.bleObsDefaultPriority = 0; // type: number
RF.bleObsAssertRequestForRx = true; // type: boolean
RF.interruptPriority = "7"; // type: string
RF.softwareInterruptPriority = "0"; // type: string
RF.xoscNeeded = true; // type: boolean
RF.globalEventMask = []; // type: unknown[]
RF.globalCallbackFunction = "NULL"; // type: string
RF.DIO_0 = "CONFIG_RF_DIO0"; // type: string
RF.DIO_1 = "CONFIG_RF_DIO1"; // type: string
RF.DIO_2 = "CONFIG_RF_DIO2"; // type: string
RF.DIO_3 = "CONFIG_RF_DIO3"; // type: string
RF.DIO_4 = "CONFIG_RF_DIO4"; // type: string
RF.DIO_5 = "CONFIG_RF_DIO5"; // type: string
RF.DIO_6 = "CONFIG_RF_DIO6"; // type: string
RF.DIO_7 = "CONFIG_RF_DIO7"; // type: string
RF.DIO_8 = "CONFIG_RF_DIO8"; // type: string
RF.DIO_9 = "CONFIG_RF_DIO9"; // type: string
RF.DIO_10 = "CONFIG_RF_DIO10"; // type: string
RF.DIO_11 = "CONFIG_RF_DIO11"; // type: string
RF.DIO_12 = "CONFIG_RF_DIO12"; // type: string
RF.DIO_13 = "CONFIG_RF_DIO13"; // type: string
RF.DIO_14 = "CONFIG_RF_DIO14"; // type: string
RF.DIO_15 = "CONFIG_RF_DIO15"; // type: string
RF.DIO_16 = "CONFIG_RF_DIO16"; // type: string
RF.DIO_17 = "CONFIG_RF_DIO17"; // type: string
RF.DIO_18 = "CONFIG_RF_DIO18"; // type: string
RF.DIO_19 = "CONFIG_RF_DIO19"; // type: string
RF.DIO_20 = "CONFIG_RF_DIO20"; // type: string
RF.DIO_21 = "CONFIG_RF_DIO21"; // type: string
RF.DIO_22 = "CONFIG_RF_DIO22"; // type: string
RF.DIO_23 = "CONFIG_RF_DIO23"; // type: string
RF.DIO_24 = "CONFIG_RF_DIO24"; // type: string
RF.DIO_25 = "CONFIG_RF_DIO25"; // type: string
RF.DIO_26 = "CONFIG_RF_DIO26"; // type: string
RF.DIO_27 = "CONFIG_RF_DIO27"; // type: string
RF.DIO_28 = "CONFIG_RF_DIO28"; // type: string
RF.DIO_29 = "CONFIG_RF_DIO29"; // type: string
RF.DIO_30 = "CONFIG_RF_DIO30"; // type: string
RF.rfAntennaPinSymbol0 = "CONFIG_RF_ANTENNA_PIN_0"; // type: string
RF.rfAntennaPinSymbol1 = "CONFIG_RF_ANTENNA_PIN_1"; // type: string
RF.rfAntennaPinSymbol2 = "CONFIG_RF_ANTENNA_PIN_2"; // type: string
RF.rfAntennaPinSymbol3 = "CONFIG_RF_ANTENNA_PIN_3"; // type: string
RF.rfAntennaPinSymbol4 = "CONFIG_RF_ANTENNA_PIN_4"; // type: string
RF.rfAntennaPinSymbol5 = "CONFIG_RF_ANTENNA_PIN_5"; // type: string
RF.rfAntennaPinSymbol6 = "CONFIG_RF_ANTENNA_PIN_6"; // type: string
RF.rfAntennaPinSymbol7 = "CONFIG_RF_ANTENNA_PIN_7"; // type: string
RF.rfAntennaPinSymbol8 = "CONFIG_RF_ANTENNA_PIN_8"; // type: string
RF.rfAntennaPinSymbol9 = "CONFIG_RF_ANTENNA_PIN_9"; // type: string
RF.rfCoexRequestPinSymbol = "CONFIG_RF_COEX_REQUEST"; // type: string
RF.rfCoexPriorityPinSymbol = "CONFIG_RF_COEX_PRIORITY"; // type: string
RF.rfCoexGrantPinSymbol = "CONFIG_RF_COEX_GRANT"; // type: string
RFCustom.ble = []; // type: unknown[]
RFCustom.ieee = ["ieee154"]; // type: string[]
RFCustom.radioConfigieee154.phyType = "ieee154"; // type: string
RFCustom.radioConfigieee154.parent = "Custom"; // type: string
RFCustom.radioConfigieee154.permission = "ReadWrite"; // type: string
RFCustom.radioConfigieee154.frequency = 2405; // type: number
RFCustom.radioConfigieee154.txPower = "5"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.symGenMethod = "Custom"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.paExport = "active"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.useConst = true; // type: boolean
RFCustom.radioConfigieee154.codeExportConfig.useMulti = true; // type: boolean
RFCustom.radioConfigieee154.codeExportConfig.stackOverride = ""; // type: string
RFCustom.radioConfigieee154.codeExportConfig.stackOverrideMacro = ""; // type: string
RFCustom.radioConfigieee154.codeExportConfig.appOverride = ""; // type: string
RFCustom.radioConfigieee154.codeExportConfig.appOverrideMacro = ""; // type: string
RFCustom.radioConfigieee154.codeExportConfig.patchUpdate = undefined; // type: undefined
RFCustom.radioConfigieee154.codeExportConfig.cpePatch = "Automatic"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.mcePatch = "Automatic"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.rfePatch = "Automatic"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdPrefix = "RF_"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdFormat = "camelCase"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdList_ble = []; // type: unknown[]
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5RadioSetup = "RF_cmdBle5RadioSetup"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdFs = "RF_cmdFs"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5AdvAux = "RF_cmdBle5AdvAux"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5GenericRx = "RF_cmdBle5GenericRx"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdNop = "RF_cmdNop"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdRadioSetup = "RF_cmdIeeeRadioSetup"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdFsOff = "RF_cmdFsOff"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdRxTest = "RF_cmdRxTest"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdTxTest = "RF_cmdTxTest"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdSyncStopRat = "RF_cmdSyncStopRat"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdSyncStartRat = "RF_cmdSyncStartRat"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdResyncRat = "RF_cmdResyncRat"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdCount = "RF_cmdCount"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdFsPowerup = "RF_cmdFsPowerup"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdFsPowerdown = "RF_cmdFsPowerdown"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdSchImm = "RF_cmdSchImm"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdCountBranch = "RF_cmdCountBranch"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdPatternCheck = "RF_cmdPatternCheck"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleSlave = "RF_cmdBleSlave"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleMaster = "RF_cmdBleMaster"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleAdv = "RF_cmdBleAdv"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleAdvDir = "RF_cmdBleAdvDir"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleAdvNc = "RF_cmdBleAdvNc"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleAdvScan = "RF_cmdBleAdvScan"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleScanner = "RF_cmdBleScanner"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleInitiator = "RF_cmdBleInitiator"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleGenericRx = "RF_cmdBleGenericRx"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBleTxTest = "RF_cmdBleTxTest"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5Slave = "RF_cmdBle5Slave"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5Master = "RF_cmdBle5Master"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5AdvExt = "RF_cmdBle5AdvExt"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5AdvPer = "RF_cmdBle5AdvPer"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5ScannerPer = "RF_cmdBle5ScannerPer"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5Scanner = "RF_cmdBle5Scanner"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5Initiator = "RF_cmdBle5Initiator"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5TxTest = "RF_cmdBle5TxTest"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5Adv = "RF_cmdBle5Adv"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5AdvDir = "RF_cmdBle5AdvDir"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5AdvNc = "RF_cmdBle5AdvNc"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdBle5AdvScan = "RF_cmdBle5AdvScan"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdPropRxAdv = "RF_cmdPropRxAdv"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdPropTxAdv = "RF_cmdPropTxAdv"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdList_ieee_15_4 = ["cmdIeeeCsma","cmdIeeeEdScan","cmdIeeeRx","cmdIeeeRxAck","cmdIeeeTx","cmdRadioSetup","cmdTxTest"]; // type: string[]
RFCustom.radioConfigieee154.codeExportConfig.cmdIeeeTx = "RF_cmdIeeeTx"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdIeeeRx = "RF_cmdIeeeRx"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdIeeeEdScan = "RF_cmdIeeeEdScan"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdIeeeCsma = "RF_cmdIeeeCsma"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdIeeeRxAck = "RF_cmdIeeeRxAck"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.cmdIeeeAbortBg = "RF_cmdIeeeAbortBg"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.rfMode = "RF_prop"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.txPower = "txPowerTable"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.txPowerSize = "TX_POWER_TABLE_SIZE"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.overrides = "pOverrides"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.phyGroup = "ieee_15_4"; // type: string
RFCustom.radioConfigieee154.codeExportConfig.phyType = "ieee154"; // type: string
RFDesign.rfDesign = "LP_CC2652RB"; // type: string
RFDesign.fbSub1g = "none"; // type: string
RFDesign.fb24g = "fb2400"; // type: string
RFDesign.feSub1g = "ID"; // type: string
RFDesign.fe24g = "ID"; // type: string
SHA2.sha2Implementation = "SHA2CC26X2"; // type: string
SPI.spiImplementation = "SPICC26X2DMA"; // type: string
TRNG.trngImplementation = "TRNGCC26XX"; // type: string
UART2.baudRates = [115200]; // type: number[]
UART2.enableNonblocking = true; // type: boolean
UART2.dataDirection = "Send and Receive"; // type: string
UART2.flowControl = false; // type: boolean
UART2.interruptPriority = "7"; // type: string
UART2.rxRingBufferSize = 32; // type: number
UART2.txRingBufferSize = 32; // type: number
UART2.txInterruptFifoThreshold = "1/8"; // type: string
UART2.rxInterruptFifoThreshold = "4/8"; // type: string
UART2.txPinInstance.mode = "Output"; // type: string
UART2.txPinInstance.outputType = "Standard"; // type: string
UART2.txPinInstance.outputStrength = "Medium"; // type: string
UART2.txPinInstance.initialOutputState = "High"; // type: string
UART2.txPinInstance.pull = "None"; // type: string
UART2.txPinInstance.invert = false; // type: boolean
UART2.txPinInstance.outputSlew = false; // type: boolean
UART2.txPinInstance.hysteresis = false; // type: boolean
UART2.txPinInstance.interruptTrigger = "None"; // type: string
UART2.txPinInstance.parentSignalName = "txPin"; // type: string
UART2.txPinInstance.parentInterfaceName = "uart"; // type: string
UART2.txPinInstance.parentSignalDisplayName = "TX"; // type: string
UART2.rxPinInstance.mode = "Input"; // type: string
UART2.rxPinInstance.outputType = "Standard"; // type: string
UART2.rxPinInstance.outputStrength = "Medium"; // type: string
UART2.rxPinInstance.initialOutputState = "Low"; // type: string
UART2.rxPinInstance.pull = "Pull Down"; // type: string
UART2.rxPinInstance.invert = false; // type: boolean
UART2.rxPinInstance.outputSlew = false; // type: boolean
UART2.rxPinInstance.hysteresis = false; // type: boolean
UART2.rxPinInstance.interruptTrigger = "None"; // type: string
UART2.rxPinInstance.parentSignalName = "rxPin"; // type: string
UART2.rxPinInstance.parentInterfaceName = "uart"; // type: string
UART2.rxPinInstance.parentSignalDisplayName = "RX"; // type: string
Watchdog.watchdogImplementation = "WatchdogCC26XX"; // type: string
AESECB.interruptPriority = "7"; // type: string
ECDH.interruptPriority = "7"; // type: string
ECDSA.interruptPriority = "7"; // type: string
ECDSA.trngInterruptPriority = "7"; // type: string
ECJPAKE.interruptPriority = "7"; // type: string
GPIO1.mode = "Input"; // type: string
GPIO1.outputType = "Standard"; // type: string
GPIO1.outputStrength = "Medium"; // type: string
GPIO1.initialOutputState = "Low"; // type: string
GPIO1.pull = "None"; // type: string
GPIO1.invert = false; // type: boolean
GPIO1.outputSlew = false; // type: boolean
GPIO1.hysteresis = false; // type: boolean
GPIO1.interruptTrigger = "None"; // type: string
GPIO1.parentSignalName = ""; // type: string
GPIO1.parentInterfaceName = ""; // type: string
GPIO1.parentSignalDisplayName = ""; // type: string
GPIO2.mode = "Input"; // type: string
GPIO2.outputType = "Standard"; // type: string
GPIO2.outputStrength = "Medium"; // type: string
GPIO2.initialOutputState = "Low"; // type: string
GPIO2.pull = "None"; // type: string
GPIO2.invert = false; // type: boolean
GPIO2.outputSlew = false; // type: boolean
GPIO2.hysteresis = false; // type: boolean
GPIO2.interruptTrigger = "None"; // type: string
GPIO2.parentSignalName = ""; // type: string
GPIO2.parentInterfaceName = ""; // type: string
GPIO2.parentSignalDisplayName = ""; // type: string
GPIO3.mode = "Output"; // type: string
GPIO3.outputType = "Standard"; // type: string
GPIO3.outputStrength = "Medium"; // type: string
GPIO3.initialOutputState = "Low"; // type: string
GPIO3.pull = "None"; // type: string
GPIO3.invert = false; // type: boolean
GPIO3.outputSlew = false; // type: boolean
GPIO3.hysteresis = false; // type: boolean
GPIO3.interruptTrigger = "None"; // type: string
GPIO3.parentSignalName = ""; // type: string
GPIO3.parentInterfaceName = ""; // type: string
GPIO3.parentSignalDisplayName = ""; // type: string
GPIO4.mode = "Output"; // type: string
GPIO4.outputType = "Standard"; // type: string
GPIO4.outputStrength = "Medium"; // type: string
GPIO4.initialOutputState = "Low"; // type: string
GPIO4.pull = "None"; // type: string
GPIO4.invert = false; // type: boolean
GPIO4.outputSlew = false; // type: boolean
GPIO4.hysteresis = false; // type: boolean
GPIO4.interruptTrigger = "None"; // type: string
GPIO4.parentSignalName = ""; // type: string
GPIO4.parentInterfaceName = ""; // type: string
GPIO4.parentSignalDisplayName = ""; // type: string
GPIO5.mode = "Output"; // type: string
GPIO5.outputType = "Standard"; // type: string
GPIO5.outputStrength = "High"; // type: string
GPIO5.initialOutputState = "High"; // type: string
GPIO5.pull = "None"; // type: string
GPIO5.invert = false; // type: boolean
GPIO5.outputSlew = false; // type: boolean
GPIO5.hysteresis = false; // type: boolean
GPIO5.interruptTrigger = "None"; // type: string
GPIO5.parentSignalName = ""; // type: string
GPIO5.parentInterfaceName = ""; // type: string
GPIO5.parentSignalDisplayName = ""; // type: string
NVS1.nvsType = "Internal"; // type: string
NVS1.nvsImplementation = "NVSCC26XX"; // type: string
NVS1.internalFlash.regionType = "Generated"; // type: string
NVS1.internalFlash.regionBase = 335872; // type: number
NVS1.internalFlash.regionSize = 16384; // type: number
NVS1.internalFlash.sectorSize = 8192; // type: number
SHA21.interruptPriority = "7"; // type: string
SPI2.mode = "Four Pin CS Active Low"; // type: string
SPI2.defaultTxBufferValue = "~0"; // type: string
SPI2.minDmaTransferSize = 10; // type: number
SPI2.duplex = "Full"; // type: string
SPI2.dmaInterruptPriority = "7"; // type: string
SPI2.softwareInterruptPriority = "0"; // type: string
SPI2.sclkPinInstance.mode = "Output"; // type: string
SPI2.sclkPinInstance.outputType = "Standard"; // type: string
SPI2.sclkPinInstance.outputStrength = "Medium"; // type: string
SPI2.sclkPinInstance.initialOutputState = "Low"; // type: string
SPI2.sclkPinInstance.pull = "None"; // type: string
SPI2.sclkPinInstance.invert = false; // type: boolean
SPI2.sclkPinInstance.outputSlew = false; // type: boolean
SPI2.sclkPinInstance.hysteresis = false; // type: boolean
SPI2.sclkPinInstance.interruptTrigger = "None"; // type: string
SPI2.sclkPinInstance.parentSignalName = "sclkPin"; // type: string
SPI2.sclkPinInstance.parentInterfaceName = "spi"; // type: string
SPI2.sclkPinInstance.parentSignalDisplayName = "SCLK"; // type: string
SPI2.pociPinInstance.mode = "Input"; // type: string
SPI2.pociPinInstance.outputType = "Standard"; // type: string
SPI2.pociPinInstance.outputStrength = "Medium"; // type: string
SPI2.pociPinInstance.initialOutputState = "Low"; // type: string
SPI2.pociPinInstance.pull = "None"; // type: string
SPI2.pociPinInstance.invert = false; // type: boolean
SPI2.pociPinInstance.outputSlew = false; // type: boolean
SPI2.pociPinInstance.hysteresis = false; // type: boolean
SPI2.pociPinInstance.interruptTrigger = "None"; // type: string
SPI2.pociPinInstance.parentSignalName = "pociPin"; // type: string
SPI2.pociPinInstance.parentInterfaceName = "spi"; // type: string
SPI2.pociPinInstance.parentSignalDisplayName = "POCI"; // type: string
SPI2.picoPinInstance.mode = "Output"; // type: string
SPI2.picoPinInstance.outputType = "Standard"; // type: string
SPI2.picoPinInstance.outputStrength = "Medium"; // type: string
SPI2.picoPinInstance.initialOutputState = "Low"; // type: string
SPI2.picoPinInstance.pull = "None"; // type: string
SPI2.picoPinInstance.invert = false; // type: boolean
SPI2.picoPinInstance.outputSlew = false; // type: boolean
SPI2.picoPinInstance.hysteresis = false; // type: boolean
SPI2.picoPinInstance.interruptTrigger = "None"; // type: string
SPI2.picoPinInstance.parentSignalName = "picoPin"; // type: string
SPI2.picoPinInstance.parentInterfaceName = "spi"; // type: string
SPI2.picoPinInstance.parentSignalDisplayName = "PICO"; // type: string
SPI2.csnPinInstance.mode = "Output"; // type: string
SPI2.csnPinInstance.outputType = "Standard"; // type: string
SPI2.csnPinInstance.outputStrength = "Medium"; // type: string
SPI2.csnPinInstance.initialOutputState = "High"; // type: string
SPI2.csnPinInstance.pull = "None"; // type: string
SPI2.csnPinInstance.invert = false; // type: boolean
SPI2.csnPinInstance.outputSlew = false; // type: boolean
SPI2.csnPinInstance.hysteresis = false; // type: boolean
SPI2.csnPinInstance.interruptTrigger = "None"; // type: string
SPI2.csnPinInstance.parentSignalName = "csnPin"; // type: string
SPI2.csnPinInstance.parentInterfaceName = "spi"; // type: string
SPI2.csnPinInstance.parentSignalDisplayName = "CSN"; // type: string
TRNG1.interruptPriority = "7"; // type: string
TRNG1.softwareInterruptPriority = "0"; // type: string
TRNG1.entropyGenerationCycles = 240000; // type: number
UART2.baudRates = [115200]; // type: number[]
UART2.enableNonblocking = true; // type: boolean
UART2.dataDirection = "Send and Receive"; // type: string
UART2.flowControl = false; // type: boolean
UART2.interruptPriority = "7"; // type: string
UART2.rxRingBufferSize = 32; // type: number
UART2.txRingBufferSize = 32; // type: number
UART2.txInterruptFifoThreshold = "1/8"; // type: string
UART2.rxInterruptFifoThreshold = "4/8"; // type: string
UART2.txPinInstance.mode = "Output"; // type: string
UART2.txPinInstance.outputType = "Standard"; // type: string
UART2.txPinInstance.outputStrength = "Medium"; // type: string
UART2.txPinInstance.initialOutputState = "High"; // type: string
UART2.txPinInstance.pull = "None"; // type: string
UART2.txPinInstance.invert = false; // type: boolean
UART2.txPinInstance.outputSlew = false; // type: boolean
UART2.txPinInstance.hysteresis = false; // type: boolean
UART2.txPinInstance.interruptTrigger = "None"; // type: string
UART2.txPinInstance.parentSignalName = "txPin"; // type: string
UART2.txPinInstance.parentInterfaceName = "uart"; // type: string
UART2.txPinInstance.parentSignalDisplayName = "TX"; // type: string
UART2.rxPinInstance.mode = "Input"; // type: string
UART2.rxPinInstance.outputType = "Standard"; // type: string
UART2.rxPinInstance.outputStrength = "Medium"; // type: string
UART2.rxPinInstance.initialOutputState = "Low"; // type: string
UART2.rxPinInstance.pull = "Pull Down"; // type: string
UART2.rxPinInstance.invert = false; // type: boolean
UART2.rxPinInstance.outputSlew = false; // type: boolean
UART2.rxPinInstance.hysteresis = false; // type: boolean
UART2.rxPinInstance.interruptTrigger = "None"; // type: string
UART2.rxPinInstance.parentSignalName = "rxPin"; // type: string
UART2.rxPinInstance.parentInterfaceName = "uart"; // type: string
UART2.rxPinInstance.parentSignalDisplayName = "RX"; // type: string
Watchdog1.period = 1000; // type: number