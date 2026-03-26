radio.onReceivedNumber(function (receivedNumber) {
    radio.raiseEvent(
    JoyBit.rockerY(),
    EventBusValue.MES_REMOTE_CONTROL_EVT_PLAY
    )
})
radio.setGroup(1)
basic.forever(function () {
	
})
