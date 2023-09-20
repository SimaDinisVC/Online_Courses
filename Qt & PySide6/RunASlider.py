from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow, QSlider

def respond_to_slider(data): # The slot: responds when something happens
        print("Slider moved to: ", data)

app = QApplication()
window = QMainWindow()
window.setWindowTitle("Making a Slider!")

slider = QSlider(Qt.Horizontal)
slider.setMinimum(0)
slider.setMaximum(100)
slider.setValue(50) # Set the Defauld Value

slider.valueChanged.connect(respond_to_slider) # passing the data from the signal to the slot.

window.setCentralWidget(slider)
window.show()
app.exec()