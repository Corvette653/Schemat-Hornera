document.querySelector("div:nth-child(1) input").addEventListener("change", licz, false);
document.querySelector("div:nth-child(2) input").addEventListener("change", licz, false);

function licz() {
	var liczba_do_zmiany = document.querySelector("div:nth-child(3) input").value;
	var system = document.querySelector("div:nth-child(4) input").value;
	var system_int = parseInt(system);
	var wynik = parseInt(liczba_do_zmiany[0]);

	for (var i = 0; i < liczba_do_zmiany.length; i++) {
		if (liczba_do_zmiany[i] >= system || liczba_do_zmiany[i] == "e") {
			alert(liczba_do_zmiany + " - to nie jest liczba w systemie (" + system + ")!!!");
			return;
		}
	}

	for (var i = 1; i < liczba_do_zmiany.length; i++) {
		wynik *= system_int;
		wynik += parseInt(liczba_do_zmiany[i]);
	}

	document.querySelector("input:read-only").value = wynik;
}

/*
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
*/
