from PySide6.QtWidgets import QApplication, QWidget, QPushButton, QHBoxLayout, QVBoxLayout

import sys

""" # Test about BetterComments extension
* Meu comentário
! Alerta
// Corta isto
? Isto Funciona?
TODO: Make Sure to implemente the 1 functionality
"""

class RockWidget(QWidget):

    def __init__(self):
        super().__init__()
        self.setWindowTitle("RockWidget")

        button1 = QPushButton("Button1")
        button1.clicked.connect(self.button1_clicked)
        button2 = QPushButton("Button2")
        button2.clicked.connect(self.button2_clicked)


        button_layout = QVBoxLayout(self) # QHBoxLayout - Horizontal Direction
        button_layout.addWidget(button1)
        button_layout.addWidget(button2)

        self.setLayout(button_layout)

    def button1_clicked(self):
        print("Button1 clicked!")

    def button2_clicked(self):
        print("Button2 clicked!")

app = QApplication(sys.argv)

window = RockWidget()
window.show()
app.exec()