from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton

def button_callback(data): # The slot: responds when something happens
    print("The user has clicked a butoon! Checked?", data)

app = QApplication()
window = QMainWindow()
window.setWindowTitle("Responding a Button!")

button = QPushButton("PRESS ME!")
button.setCheckable(True) # Makes the button checkable. It's unchecked by default.
                          # Further clicks toggle between checked and unchecked states

# "clicked" is a signal of QPushButton. It's emitted when you click on the button
button.clicked.connect(button_callback) # To wire a slot to the signal

window.setCentralWidget(button)
window.show()
app.exec()