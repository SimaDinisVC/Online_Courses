from PySide6.QtWidgets import QApplication, QWidget, QHBoxLayout, QVBoxLayout, QTabWidget, QPushButton, QLabel, QLineEdit,QSpacerItem

import sys

class Widget(QWidget):
    def __init__(self):
        super().__init__()
       
        self.setWindowTitle("QTabWidgetDemo Demo")

        tab_widget = QTabWidget(self) #* Object Creation

        #* Information
        widget_form = QWidget() #* Making a New Form
        label_full_name = QLabel("Full name :")
        line_edit_full_name = QLineEdit()
        form_layout = QHBoxLayout()
        form_layout.addWidget(label_full_name)
        form_layout.addWidget(line_edit_full_name)
        widget_form.setLayout(form_layout)

        #* Buttons
        widget_buttons = QWidget()
        button_1 = QPushButton("One")
        button_1.clicked.connect(self.button_clicked)
        button_2 = QPushButton("Two")
        button_2.clicked.connect(self.button_clicked)
        button_3 = QPushButton("Three")
        button_3.clicked.connect(self.button_clicked)
        buttons_layout = QVBoxLayout()
        buttons_layout.addWidget(button_1)
        buttons_layout.addWidget(button_2)
        buttons_layout.addWidget(button_3)
        widget_buttons.setLayout(buttons_layout)


        #* Add tabs to widget
        tab_widget.addTab(widget_form,"Information")
        tab_widget.addTab(widget_buttons,"Button")

        tab_widget.tabBarDoubleClicked.connect(self.teste)

        layout = QVBoxLayout()
        layout.addWidget(tab_widget)

        self.setLayout(layout)

    def teste(self, index):
        print(index)

    def button_clicked(self):
        print("Button clicked")

app = QApplication(sys.argv)

widget = Widget()
widget.show()

app.exec()