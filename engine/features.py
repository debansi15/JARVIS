from playsound import playsound 
import eel

#Playing assistant sound function

@eel.expose
def playAssistantSound():
    music_dir ="www\\assets\\audio\\mixkit-software-interface-start-2574.wav"
    playsound(music_dir)