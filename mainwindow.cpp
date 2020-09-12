#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMessageBox>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_pushButton_clicked()
{
    QString tekst = ui->lineEdit_2->text();
    int system = ui->spinBox->value();
    unsigned long long wynik;
    for (int i = 0; i < tekst.length(); i++) {
        if (tekst[i].digitValue() == -1 || tekst[i].digitValue() >= system) {
            QMessageBox wiadomosc;
            wiadomosc.setText(tekst + " - to nie jest liczba w systemie (" + QString::number(system) + ")!!!");
            wiadomosc.exec();
            return;
        }
    }

    wynik = tekst[0].digitValue();

    for (int i = 1; i < tekst.length(); i++) {
        wynik *= system;
        wynik += tekst[i].digitValue();
    }

    tekst = QString::number(wynik);

    ui->lineEdit->setText(tekst);

    return;
}
