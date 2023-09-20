import sys
from PySide6 import QtCore, QtWidgets
from PySide6.QtUiTools import QUiLoader
from ui_widget import Ui_Widget

#! THE LOAD METHOD DOES THE HEAVY LIFTING AT RUN TIME!
#! WE PAY A PRICE EVERY TIME THE APP IS RUN

loader = QUiLoader() #* Set up a loader object

app = QtWidgets.QApplication(sys.argv)

"""
window = loader.load("widget.ui", None) #* Load the ui - happens at run time!

def do_something() :
    print(window.full_name_line_edit.text()+" is a "+ window.occupation_line_edit.text() + "!")

#* Changing the properties in the form
window.setWindowTitle("Taking data")

#* Accessing widgets in the form
window.submit_button.clicked.connect(do_something)
"""

#****** ORRRRR ******#

"""
class UserInterface(QtCore.QObject):
    def __init__(self):
        super().__init__()
        self.ui = loader.load("widget.ui", None) #* Load the ui - happens at run time!
        self.ui.setWindowTitle("Taking data") #* Changing the properties in the form
        self.ui.submit_button.clicked.connect(self.do_something) #* Accessing widgets in the form

    def show(self):
        self.ui.show()

    def do_something(self):
        print(self.ui.full_name_line_edit.text()+" is a "+ self.ui.occupation_line_edit.text() + "!")
    
window = UserInterface()
"""

#*********** OR EVEN BETTER ***********#

#! Is better if you convert .ui files into .py files to don't pay THAT PRICE!
#? Command to do this?
#* pyside6-uic.exe name.ui > ui_name.py
#! After that Save the file to utf-8 Encoding
#! make sure to be in your directory!!!
#? Command to convert resource files .qrc in .py files?
#* pyside6-rcc.exe name.qrc -o resource.py

class Widget(QtWidgets.QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle("Taking data")
        self.submit_button.clicked.connect(self.do_something)

    def do_something(self):
        print(self.full_name_line_edit.text()+" is a "+ self.occupation_line_edit.text() + "!")

window = Widget()

window.show()
app.exec()