from PySide6.QtWidgets import QApplication, QWidget

import sys # Command Line Options

app = QApplication(sys.argv)

window = QWidget()
window.setWindowTitle("Hello World!")
window.show()

app.exec()