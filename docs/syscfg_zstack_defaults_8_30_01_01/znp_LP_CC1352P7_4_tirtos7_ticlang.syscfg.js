AESCBC.aescbcImplementation = "AESCBCCC26XX"; // type: string
AESCCM.aesccmImplementation = "AESCCMCC26XX"; // type: string
AESECB.aesecbImplementation = "AESECBCC26XX"; // type: string
device.enableCodeGeneration = true; // type: boolean
device.forceVddr = false; // type: boolean
device.enableDCDC = true; // type: boolean
device.srcClkLF = "LF XOSC"; // type: string
device.extClkDio = 1; // type: number
device.rtcIncrement = 8388608; // type: number
device.xoscCapArray = true; // type: boolean
device.xoscCapArrayDelta = 193; // type: number
device.srcClkHF = "48 MHz XOSC_HF"; // type: string
device.tcxoType = "CMOS Type"; // type: string
device.tcxoMaxStartup = 127; // type: number
device.enableXoscHfComp = false; // type: boolean
device.useFcfgXoscHfInsertion = false; // type: boolean
device.xoscSinglePointCalibration = ""; // type: string
device.enableXoscLfComp = false; // type: boolean
device.RTCCustomXOSCLFCoeff = false; // type: boolean
device.rtcXOSCLFCoefficientA = -0.035; // type: number
device.rtcXOSCLFCoefficientB = 1.75; // type: number
device.rtcXOSCLFCoefficientC = -21.875; // type: number
device.enableBootloader = true; // type: boolean
device.enableBootloaderBackdoor = true; // type: boolean
device.dioBootloaderBackdoor = 15; // type: number
device.levelBootloaderBackdoor = "Active low"; // type: string
device.configureIEEE = false; // type: boolean
device.addressIEEE = "ff:ff:ff:ff:ff:ff:ff:ff"; // type: string
device.configureBLE = false; // type: boolean
device.addressBLE = "ff:ff:ff:ff:ff:ff:ff:ff"; // type: string
device.disableCache = false; // type: boolean
device.setFlashVectorTable = false; // type: boolean
device.addressFlashVectorTable = 0; // type: number
device.disableRamParity = false; // type: boolean
device.markAllFlashSecure = false; // type: boolean
device.lockNonSecureVectorTableBaseAddress = false; // type: boolean
device.lockSecureInterruptConfig = false; // type: boolean
device.lockSAURegions = false; // type: boolean
device.lockNonSecureMPU = false; // type: boolean
device.lockSecureMPU = false; // type: boolean
device.disableSecureNonInvasiveDebug = false; // type: boolean
device.disableSecureInvasiveDebug = false; // type: boolean
device.FailureAnalysis = false; // type: boolean
device.FailureAnalysisCustomerKey = false; // type: boolean
device.FailureAnalysisCustomerKeyValue = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"; // type: string
device.CpuDap = true; // type: boolean
device.PwrprofTap = true; // type: boolean
device.TestTap = false; // type: boolean
device.Pbist2Tap = false; // type: boolean
device.Pbist1Tap = false; // type: boolean
device.AonTap = false; // type: boolean
DMA.dmaImplementation = "UDMACC26XX"; // type: string
DMA.dmaErrorFunction = "dmaErrorFxn"; // type: string
DMA.interruptPriority = "7"; // type: string
ECDH.ecdhImplementation = "ECDHCC26X2"; // type: string
ECDSA.ecdsaImplementation = "ECDSACC26X2"; // type: string
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
RF.pinSelectionAntenna = 3; // type: number
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
RF.globalEventMask = ["RF_GlobalEventInit","RF_GlobalEventRadioPowerDown","RF_GlobalEventRadioSetup"]; // type: string[]
RF.globalCallbackFunction = "rfDriverCallback"; // type: string
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
RF.rfAntennaPinSymbol0 = "CONFIG_RF_24GHZ"; // type: string
RF.rfAntennaPinSymbol1 = "CONFIG_RF_HIGH_PA"; // type: string
RF.rfAntennaPinSymbol2 = "CONFIG_RF_SUB1GHZ"; // type: string
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
RF.rfAntennaPin0Instance.mode = "Output"; // type: string
RF.rfAntennaPin0Instance.outputType = "Standard"; // type: string
RF.rfAntennaPin0Instance.outputStrength = "High"; // type: string
RF.rfAntennaPin0Instance.initialOutputState = "Low"; // type: string
RF.rfAntennaPin0Instance.pull = "None"; // type: string
RF.rfAntennaPin0Instance.invert = false; // type: boolean
RF.rfAntennaPin0Instance.outputSlew = false; // type: boolean
RF.rfAntennaPin0Instance.hysteresis = false; // type: boolean
RF.rfAntennaPin0Instance.interruptTrigger = "None"; // type: string
RF.rfAntennaPin0Instance.parentSignalName = "rfAntennaPin0"; // type: string
RF.rfAntennaPin0Instance.parentInterfaceName = "GPIO"; // type: string
RF.rfAntennaPin0Instance.parentSignalDisplayName = "RF Antenna Pin 0"; // type: string
RF.rfAntennaPin1Instance.mode = "Output"; // type: string
RF.rfAntennaPin1Instance.outputType = "Standard"; // type: string
RF.rfAntennaPin1Instance.outputStrength = "High"; // type: string
RF.rfAntennaPin1Instance.initialOutputState = "Low"; // type: string
RF.rfAntennaPin1Instance.pull = "None"; // type: string
RF.rfAntennaPin1Instance.invert = false; // type: boolean
RF.rfAntennaPin1Instance.outputSlew = false; // type: boolean
RF.rfAntennaPin1Instance.hysteresis = false; // type: boolean
RF.rfAntennaPin1Instance.interruptTrigger = "None"; // type: string
RF.rfAntennaPin1Instance.parentSignalName = "rfAntennaPin1"; // type: string
RF.rfAntennaPin1Instance.parentInterfaceName = "GPIO"; // type: string
RF.rfAntennaPin1Instance.parentSignalDisplayName = "RF Antenna Pin 1"; // type: string
RF.rfAntennaPin2Instance.mode = "Output"; // type: string
RF.rfAntennaPin2Instance.outputType = "Standard"; // type: string
RF.rfAntennaPin2Instance.outputStrength = "High"; // type: string
RF.rfAntennaPin2Instance.initialOutputState = "Low"; // type: string
RF.rfAntennaPin2Instance.pull = "None"; // type: string
RF.rfAntennaPin2Instance.invert = false; // type: boolean
RF.rfAntennaPin2Instance.outputSlew = false; // type: boolean
RF.rfAntennaPin2Instance.hysteresis = false; // type: boolean
RF.rfAntennaPin2Instance.interruptTrigger = "None"; // type: string
RF.rfAntennaPin2Instance.parentSignalName = "rfAntennaPin2"; // type: string
RF.rfAntennaPin2Instance.parentInterfaceName = "GPIO"; // type: string
RF.rfAntennaPin2Instance.parentSignalDisplayName = "RF Antenna Pin 2"; // type: string
SHA2.sha2Implementation = "SHA2CC26X2"; // type: string
TRNG.trngImplementation = "TRNGCC26XX"; // type: string
zstack.deviceType = "znp"; // type: string
zstack.genLibs = true; // type: boolean
zstack.deviceTypeReadOnly = true; // type: boolean
zstack.appBuilder = false; // type: boolean
zstack.touchlink.deviceType = "znp"; // type: string
zstack.touchlink.touchlinkEnabled = false; // type: boolean
zstack.touchlink.touchlinkMode = "initiator"; // type: string
zstack.pm.deviceType = "znp"; // type: string
zstack.pm.powerModeCapabilities = "alwaysOn"; // type: string
zstack.pm.powerModeOperation = "sleepy"; // type: string
zstack.pm.minPollPeriod = 100; // type: number
zstack.pm.pollPeriod = 3000; // type: number
zstack.pm.queuedMessagePollPeriod = 100; // type: number
zstack.pm.dataResponsePollPeriod = 100; // type: number
zstack.pm.rejoinMessagePollPeriod = 440; // type: number
zstack.rf.rfDesign = "LP_CC1352P7-4"; // type: string
zstack.rf.primaryChannels = [11]; // type: number[]
zstack.rf.secondaryChannels = [11]; // type: number[]
zstack.rf.freqBand = "freqBand24"; // type: string
zstack.rf.phyType = "phyIEEE"; // type: string
zstack.rf.phyID = "APIMAC_PHY_ID_NONE"; // type: string
zstack.rf.txPower = "0"; // type: string
zstack.rf.coexMode = "coexModeDisabled"; // type: string
zstack.rf.ieeeIniTxDefaultPriority = 0; // type: number
zstack.rf.ieeeIniTxAssertRequestForRx = true; // type: boolean
zstack.rf.ieeeConTxDefaultPriority = 0; // type: number
zstack.rf.ieeeConTxAssertRequestForRx = true; // type: boolean
zstack.rf.ieeeIniRxDefaultPriority = 0; // type: number
zstack.rf.ieeeIniRxAssertRequestForRx = true; // type: boolean
zstack.rf.ieeeConRxDefaultPriority = 0; // type: number
zstack.rf.ieeeConRxAssertRequestForRx = true; // type: boolean
zstack.rf.radioConfig.phyType = "ieee154p10"; // type: string
zstack.rf.radioConfig.parent = "Stack"; // type: string
zstack.rf.radioConfig.permission = "None"; // type: string
zstack.rf.radioConfig.frequency = 2405; // type: number
zstack.rf.radioConfig.txPower = "0"; // type: string
zstack.rf.radioConfig.txPowerHi = "10"; // type: string
zstack.rf.radioConfig.highPA = false; // type: boolean
zstack.rf.radioConfig.codeExportConfig.symGenMethod = "Custom"; // type: string
zstack.rf.radioConfig.codeExportConfig.paExport = "combined"; // type: string
zstack.rf.radioConfig.codeExportConfig.useConst = true; // type: boolean
zstack.rf.radioConfig.codeExportConfig.useMulti = false; // type: boolean
zstack.rf.radioConfig.codeExportConfig.stackOverride = ""; // type: string
zstack.rf.radioConfig.codeExportConfig.stackOverrideMacro = ""; // type: string
zstack.rf.radioConfig.codeExportConfig.appOverride = ""; // type: string
zstack.rf.radioConfig.codeExportConfig.appOverrideMacro = ""; // type: string
zstack.rf.radioConfig.codeExportConfig.patchUpdate = undefined; // type: undefined
zstack.rf.radioConfig.codeExportConfig.cpePatch = "Automatic"; // type: string
zstack.rf.radioConfig.codeExportConfig.mcePatch = "Automatic"; // type: string
zstack.rf.radioConfig.codeExportConfig.rfePatch = "Automatic"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPrefix = "RF_"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdFormat = "camelCase"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdList_prop = []; // type: unknown[]
zstack.rf.radioConfig.codeExportConfig.cmdPropRadioDivSetupPa = "RF_cmdPropRadioDivSetup"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdFs = "RF_cmdFs_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdTxTest = "RF_cmdTxTest"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdRxTest = "RF_cmdRxTest"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropTx = "RF_cmdPropTx"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropRx = "RF_cmdPropRx"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdNop = "RF_cmdNop"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdRadioSetupPa = "RF_cmdRadioSetup_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdFsOff = "RF_cmdFsOff"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdSyncStopRat = "RF_cmdSyncStopRat"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdSyncStartRat = "RF_cmdSyncStartRat"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdResyncRat = "RF_cmdResyncRat"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdCount = "RF_cmdCount"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdFsPowerup = "RF_cmdFsPowerup"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdFsPowerdown = "RF_cmdFsPowerdown"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdSchImm = "RF_cmdSchImm"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdCountBranch = "RF_cmdCountBranch"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPatternCheck = "RF_cmdPatternCheck"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropTxAdv = "RF_cmdPropTxAdv"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropRxAdv = "RF_cmdPropRxAdv"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropCs = "RF_cmdPropCs"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropRadioSetupPa = "RF_cmdPropRadioSetup"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropRxSniff = "RF_cmdPropRxSniff"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdPropRxAdvSniff = "RF_cmdPropRxAdvSniff"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdList_ble = []; // type: unknown[]
zstack.rf.radioConfig.codeExportConfig.cmdBle5RadioSetupPa = "RF_cmdBle5RadioSetup"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5AdvAux = "RF_cmdBle5AdvAux"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5GenericRx = "RF_cmdBle5GenericRx"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleSlave = "RF_cmdBleSlave"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleMaster = "RF_cmdBleMaster"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleAdv = "RF_cmdBleAdv"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleAdvDir = "RF_cmdBleAdvDir"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleAdvNc = "RF_cmdBleAdvNc"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleAdvScan = "RF_cmdBleAdvScan"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleScanner = "RF_cmdBleScanner"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleInitiator = "RF_cmdBleInitiator"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleGenericRx = "RF_cmdBleGenericRx"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBleTxTest = "RF_cmdBleTxTest"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5Slave = "RF_cmdBle5Slave"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5Master = "RF_cmdBle5Master"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5AdvExt = "RF_cmdBle5AdvExt"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5AdvPer = "RF_cmdBle5AdvPer"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5ScannerPer = "RF_cmdBle5ScannerPer"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5Scanner = "RF_cmdBle5Scanner"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5Initiator = "RF_cmdBle5Initiator"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5TxTest = "RF_cmdBle5TxTest"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5Adv = "RF_cmdBle5Adv"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5AdvDir = "RF_cmdBle5AdvDir"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5AdvNc = "RF_cmdBle5AdvNc"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdBle5AdvScan = "RF_cmdBle5AdvScan"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdList_ieee_15_4 = ["cmdFs","cmdIeeeCsma","cmdIeeeRx","cmdIeeeRxAck","cmdIeeeTx","cmdRadioSetupPa"]; // type: string[]
zstack.rf.radioConfig.codeExportConfig.cmdIeeeTx = "RF_cmdIeeeTx_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdIeeeRx = "RF_cmdIeeeRx_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdIeeeEdScan = "RF_cmdIeeeEdScan"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdIeeeCsma = "RF_cmdIeeeCsma_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdIeeeRxAck = "RF_cmdIeeeRxAck_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.cmdIeeeAbortBg = "RF_cmdIeeeAbortBg"; // type: string
zstack.rf.radioConfig.codeExportConfig.rfMode = "RF_prop_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.txPower = "txPowerTable_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.txPowerSize = "TX_POWER_TABLE_SIZE_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.overrides = "pOverrides_ieee154"; // type: string
zstack.rf.radioConfig.codeExportConfig.phyGroup = "ieee_15_4"; // type: string
zstack.rf.radioConfig.codeExportConfig.phyType = "ieee154p10"; // type: string
zstack.network.deviceType = "znp"; // type: string
zstack.network.panID = "0xFFFF"; // type: string
zstack.network.epidAsExtAddr = true; // type: boolean
zstack.network.epid = "0123456789ABCDEF"; // type: string
zstack.network.defaultNwkKey = "00000000000000000000000000000000"; // type: string
zstack.network.distributedGlobalLinkKey = "D0D1D2D3D4D5D6D7D8D9DADBDCDDDEDF"; // type: string
zstack.network.tcLinkKey = "5a6967426565416c6c69616e63653039"; // type: string
zstack.network.nwkMaxDeviceList = 20; // type: number
zstack.network.zdsecmgrTcDeviceMax = 40; // type: number
zstack.network.endDeviceTimeout = 8; // type: number
zstack.advanced.deviceType = "znp"; // type: string
zstack.advanced.routing.routeExpiryTime = 30; // type: number
zstack.advanced.routing.nwkIndirectMsgTimeout = 7; // type: number
zstack.advanced.routing.maxRouteReqEntries = 8; // type: number
zstack.advanced.packetSending.macFrameRetries = 3; // type: number
zstack.advanced.packetSending.nwkDataRetries = 2; // type: number
zstack.advanced.packetSending.apscMaxFrameRetries = 3; // type: number
zstack.advanced.packetSending.apsAckWaitDurationPolled = 6000; // type: number
zstack.advanced.tableSize.groupTableSize = 16; // type: number
zstack.advanced.tableSize.routingTableSize = 40; // type: number
zstack.advanced.tableSize.bindingTableSize = 4; // type: number
AESCBC1.interruptPriority = "7"; // type: string
AESCCM1.interruptPriority = "2"; // type: string
AESECB1.interruptPriority = "1"; // type: string
ECDH1.interruptPriority = "7"; // type: string
ECDSA1.interruptPriority = "7"; // type: string
ECDSA1.trngInterruptPriority = "7"; // type: string
Button1.autoHwConfig = true; // type: boolean
Button1.polarity = "Active Low"; // type: string
Button1.pull = "Internal"; // type: string
Button1.gpioPin.mode = "Input"; // type: string
Button1.gpioPin.outputType = "Standard"; // type: string
Button1.gpioPin.outputStrength = "Medium"; // type: string
Button1.gpioPin.initialOutputState = "Low"; // type: string
Button1.gpioPin.pull = "Pull Up"; // type: string
Button1.gpioPin.invert = false; // type: boolean
Button1.gpioPin.outputSlew = false; // type: boolean
Button1.gpioPin.hysteresis = false; // type: boolean
Button1.gpioPin.interruptTrigger = "None"; // type: string
Button1.gpioPin.parentSignalName = "button"; // type: string
Button1.gpioPin.parentInterfaceName = "GPIO"; // type: string
Button1.gpioPin.parentSignalDisplayName = "Button GPIO"; // type: string
Button2.autoHwConfig = true; // type: boolean
Button2.polarity = "Active Low"; // type: string
Button2.pull = "Internal"; // type: string
Button2.gpioPin.mode = "Input"; // type: string
Button2.gpioPin.outputType = "Standard"; // type: string
Button2.gpioPin.outputStrength = "Medium"; // type: string
Button2.gpioPin.initialOutputState = "Low"; // type: string
Button2.gpioPin.pull = "Pull Up"; // type: string
Button2.gpioPin.invert = false; // type: boolean
Button2.gpioPin.outputSlew = false; // type: boolean
Button2.gpioPin.hysteresis = false; // type: boolean
Button2.gpioPin.interruptTrigger = "None"; // type: string
Button2.gpioPin.parentSignalName = "button"; // type: string
Button2.gpioPin.parentInterfaceName = "GPIO"; // type: string
Button2.gpioPin.parentSignalDisplayName = "Button GPIO"; // type: string
LED1.dimmable = false; // type: boolean
LED1.gpioPin.mode = "Output"; // type: string
LED1.gpioPin.outputType = "Standard"; // type: string
LED1.gpioPin.outputStrength = "Medium"; // type: string
LED1.gpioPin.initialOutputState = "Low"; // type: string
LED1.gpioPin.pull = "None"; // type: string
LED1.gpioPin.invert = false; // type: boolean
LED1.gpioPin.outputSlew = false; // type: boolean
LED1.gpioPin.hysteresis = false; // type: boolean
LED1.gpioPin.interruptTrigger = "None"; // type: string
LED1.gpioPin.parentSignalName = "ledPin"; // type: string
LED1.gpioPin.parentInterfaceName = "GPIO"; // type: string
LED1.gpioPin.parentSignalDisplayName = "LED GPIO"; // type: string
LED2.dimmable = false; // type: boolean
LED2.gpioPin.mode = "Output"; // type: string
LED2.gpioPin.outputType = "Standard"; // type: string
LED2.gpioPin.outputStrength = "Medium"; // type: string
LED2.gpioPin.initialOutputState = "Low"; // type: string
LED2.gpioPin.pull = "None"; // type: string
LED2.gpioPin.invert = false; // type: boolean
LED2.gpioPin.outputSlew = false; // type: boolean
LED2.gpioPin.hysteresis = false; // type: boolean
LED2.gpioPin.interruptTrigger = "None"; // type: string
LED2.gpioPin.parentSignalName = "ledPin"; // type: string
LED2.gpioPin.parentInterfaceName = "GPIO"; // type: string
LED2.gpioPin.parentSignalDisplayName = "LED GPIO"; // type: string
NVS1.nvsType = "Internal"; // type: string
NVS1.nvsImplementation = "NVSCC26XX"; // type: string
NVS1.internalFlash.regionType = "Generated"; // type: string
NVS1.internalFlash.regionBase = 696320; // type: number
NVS1.internalFlash.regionSize = 16384; // type: number
NVS1.internalFlash.sectorSize = 8192; // type: number
NVS2.nvsType = "External"; // type: string
NVS2.nvsImplementation = "NVSSPI25X"; // type: string
NVS2.externalFlash.regionBase = 0; // type: number
NVS2.externalFlash.regionSize = 2449408; // type: number
NVS2.externalFlash.sectorSize = 4096; // type: number
NVS2.externalFlash.verifyBufferSize = 64; // type: number
NVS2.externalFlash.statusPollDelay = 100; // type: number
NVS2.externalFlash.spiFlashDevice.manager = "NVS"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectManager = "NVS"; // type: string
NVS2.externalFlash.spiFlashDevice.handle = ""; // type: string
NVS2.externalFlash.spiFlashDevice.bitRate = 4000000; // type: number
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.mode = "Output"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.outputType = "Standard"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.outputStrength = "Medium"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.initialOutputState = "High"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.pull = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.invert = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.outputSlew = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.hysteresis = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.interruptTrigger = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.parentSignalName = "chipSelect"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.parentInterfaceName = "GPIO"; // type: string
NVS2.externalFlash.spiFlashDevice.chipSelectPinInstance.parentSignalDisplayName = "Button GPIO"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.mode = "Three Pin"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.defaultTxBufferValue = "~0"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.minDmaTransferSize = 10; // type: number
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.duplex = "Full"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.dmaInterruptPriority = "7"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.softwareInterruptPriority = "0"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.mode = "Output"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.outputType = "Standard"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.outputStrength = "Medium"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.initialOutputState = "Low"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.pull = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.invert = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.outputSlew = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.hysteresis = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.interruptTrigger = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.parentSignalName = "sclkPin"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.parentInterfaceName = "spi"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.sclkPinInstance.parentSignalDisplayName = "SCLK"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.mode = "Input"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.outputType = "Standard"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.outputStrength = "Medium"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.initialOutputState = "Low"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.pull = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.invert = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.outputSlew = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.hysteresis = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.interruptTrigger = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.parentSignalName = "pociPin"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.parentInterfaceName = "spi"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.pociPinInstance.parentSignalDisplayName = "POCI"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.mode = "Output"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.outputType = "Standard"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.outputStrength = "Medium"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.initialOutputState = "Low"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.pull = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.invert = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.outputSlew = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.hysteresis = false; // type: boolean
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.interruptTrigger = "None"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.parentSignalName = "picoPin"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.parentInterfaceName = "spi"; // type: string
NVS2.externalFlash.spiFlashDevice.sharedSpiInstance.picoPinInstance.parentSignalDisplayName = "PICO"; // type: string
SHA21.interruptPriority = "7"; // type: string
TRNG1.interruptPriority = "7"; // type: string
TRNG1.softwareInterruptPriority = "0"; // type: string
TRNG1.entropyGenerationCycles = 240000; // type: number
Display_UART.displayType = "UART"; // type: string
Display_UART.displayImplementation = "DisplayUart2"; // type: string
Display_UART.lcdSize = 128; // type: number
Display_UART.lcdFont = "Fixed"; // type: string
Display_UART.lcdFontSize = 12; // type: number
Display_UART.lcdCustomFontName = ""; // type: string
Display_UART.uartBufferSize = 1024; // type: number
Display_UART.enableANSI = false; // type: boolean
Display_UART.maxPrintLength = 256; // type: number
Display_UART.mutexTimeout = "Never Timeout"; // type: string
Display_UART.mutexTimeoutValue = 1; // type: number
Display_UART.baudRate = 115200; // type: number
Display_UART.uart.baudRates = [115200]; // type: number[]
Display_UART.uart.enableNonblocking = true; // type: boolean
Display_UART.uart.dataDirection = "Send and Receive"; // type: string
Display_UART.uart.flowControl = false; // type: boolean
Display_UART.uart.interruptPriority = "7"; // type: string
Display_UART.uart.rxRingBufferSize = 32; // type: number
Display_UART.uart.txRingBufferSize = 32; // type: number
Display_UART.uart.txInterruptFifoThreshold = "1/8"; // type: string
Display_UART.uart.rxInterruptFifoThreshold = "4/8"; // type: string
Display_UART.uart.txPinInstance.mode = "Output"; // type: string
Display_UART.uart.txPinInstance.outputType = "Standard"; // type: string
Display_UART.uart.txPinInstance.outputStrength = "Medium"; // type: string
Display_UART.uart.txPinInstance.initialOutputState = "High"; // type: string
Display_UART.uart.txPinInstance.pull = "None"; // type: string
Display_UART.uart.txPinInstance.invert = false; // type: boolean
Display_UART.uart.txPinInstance.outputSlew = false; // type: boolean
Display_UART.uart.txPinInstance.hysteresis = false; // type: boolean
Display_UART.uart.txPinInstance.interruptTrigger = "None"; // type: string
Display_UART.uart.txPinInstance.parentSignalName = "txPin"; // type: string
Display_UART.uart.txPinInstance.parentInterfaceName = "uart"; // type: string
Display_UART.uart.txPinInstance.parentSignalDisplayName = "TX"; // type: string
Display_UART.uart.rxPinInstance.mode = "Input"; // type: string
Display_UART.uart.rxPinInstance.outputType = "Standard"; // type: string
Display_UART.uart.rxPinInstance.outputStrength = "Medium"; // type: string
Display_UART.uart.rxPinInstance.initialOutputState = "Low"; // type: string
Display_UART.uart.rxPinInstance.pull = "Pull Down"; // type: string
Display_UART.uart.rxPinInstance.invert = false; // type: boolean
Display_UART.uart.rxPinInstance.outputSlew = false; // type: boolean
Display_UART.uart.rxPinInstance.hysteresis = false; // type: boolean
Display_UART.uart.rxPinInstance.interruptTrigger = "None"; // type: string
Display_UART.uart.rxPinInstance.parentSignalName = "rxPin"; // type: string
Display_UART.uart.rxPinInstance.parentInterfaceName = "uart"; // type: string
Display_UART.uart.rxPinInstance.parentSignalDisplayName = "RX"; // type: string