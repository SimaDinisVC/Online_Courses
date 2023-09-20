from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton

import sys # Command Line Options

class ButtonHolder(QMainWindow): # Making with a class, but its not necessary

    def __init__(self):
        super().__init__()
        self.setWindowTitle("My Instance!") # Set a name to the Window
        button = QPushButton("PRESS ME!") # Create a Button
        self.setCentralWidget(button) # Set the Button to Central Widget

app = QApplication(sys.argv) ### We Can DO this in other File importing the Class from this file.
window = ButtonHolder()
window.show()
app.exec()