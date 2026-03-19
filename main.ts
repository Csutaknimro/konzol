radio.setGroup(1)
radio.sendNumber(0)
radio.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MES_REMOTE_CONTROL_EVT_PLAY
)
basic.forever(function () {
	
})
