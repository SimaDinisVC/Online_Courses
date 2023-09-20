from PySide6.QtCore import QSize
from PySide6.QtGui import QAction,QIcon
from PySide6.QtWidgets import QApplication, QMainWindow, QToolBar, QPushButton, QStatusBar

import sys

class MainWindow(QMainWindow):
    def __init__(self, app): #* app arg only to can quit the app
        super().__init__()
        self.app = app #*declare the app member
        self.setWindowTitle("Custom MainWindow")

        #! Menubar and menus
        menu_bar = self.menuBar() #* MenuBar Object
        file_menu = menu_bar.addMenu("File") #* Add of a menu in a MenuBar
        quit_action = file_menu.addAction("Quit")
        quit_action.triggered.connect(self.quit_app)

        edit_menu = menu_bar.addMenu("Edit")
        edit_menu.addAction("Copy")
        edit_menu.addAction("Cut")
        edit_menu.addAction("Paste")
        edit_menu.addAction("Undo")
        edit_menu.addAction("Redo")

        #* A bunch of other menu options just for the fun of it
        menu_bar.addMenu("Window")
        menu_bar.addMenu("Setting")
        menu_bar.addMenu("Help")

        #! Toolbars
        toolbar = QToolBar("My main toolbar")
        toolbar.setIconSize(QSize(16, 16)) #* Set the Action's Size
        self.addToolBar(toolbar)

        #* Add the quit action to the toolbar
        toolbar.addAction(quit_action)

        #* Action Creation
        action1 = QAction("Some Action", self)
        action1.setStatusTip("Status message for some action")
        action1.triggered.connect(self.toolbar_button_click)
        toolbar.addAction(action1)
        
        #* Separator
        toolbar.addSeparator()
        toolbar.addWidget(QPushButton("Click here"))

        #* StatusBar
        statusbar = QStatusBar(self)
        self.setStatusBar(statusbar)

        button1 = QPushButton("BUTTON1")
        button1.clicked.connect(self.button1_clicked)
        self.setCentralWidget(button1)

    def button1_clicked(self):
        print("Clicked on the button")

    def quit_app(self):
        self.app.quit()

    def toolbar_button_click(self):
        self.statusBar().showMessage("Message from my app",3000)


app = QApplication(sys.argv)

window = MainWindow(app)
window.show()

app.exec()