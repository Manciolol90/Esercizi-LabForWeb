CREATE SCHEMA IF NOT EXISTS esercizio1;
USE esercizio1;

CREATE TABLE IF NOT EXISTS tracce_musicali(
id INT PRIMARY KEY AUTO_INCREMENT,
titolo VARCHAR(255) NOT NULL,
artista VARCHAR(255) NOT NULL,
album VARCHAR(255) NOT NULL,
genere VARCHAR(50) NOT NULL,
anno INT NOT NULL,
durata_secondi INT NOT NULL CHECK(durata_secondi > 0),
bitrate_kbps INT NULL,
data_aggiunta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- gli insert me li sono fatti generare da chatgpt che ha voluto inventare tracce fittizie per motivi di copyright

INSERT INTO tracce_musicali (titolo, artista, album, genere, anno, durata_secondi, bitrate_kbps) VALUES
('Strade di Ghiaccio', 'Luca Venturi', 'Nord', 'Rock', 1984, 245, 256),
('Sole di Carta', 'Luca Venturi', 'Orizzonti', 'Pop', 1998, 212, 320),
('Notte Stellata', 'Luca Venturi', 'Orizzonti', 'Pop', 2002, 201, 320),
('Vento di Marzo', 'Mara Lisi', 'Primavere', 'Cantautorato', 1981, 231, 192),
('Fiori di Sale', 'Mara Lisi', 'Correnti', 'Indie', 2019, 189, 256),
('Ombra Lenta', 'Mara Lisi', 'Correnti', 'Indie', 2021, 204, 320),
('Frammenti di Nebbia', 'Gianni Rios', 'Punto Zero', 'Rock', 1987, 257, 192),
('Specchi Rotti', 'Gianni Rios', 'Specchi', 'Rock', 2017, 243, 320),
('Rumore Bianco', 'Gianni Rios', 'Rivoluzione', 'Rock', 2005, 219, 256),
('Tempo Immobile', 'Elena Cari', 'Onde', 'Pop', 1983, 182, 192),
('Sabbia Dorata', 'Elena Cari', 'Onde', 'Pop', 2016, 176, 320),
('Voci nel Mare', 'Elena Cari', 'Tidal', 'Pop', 2023, 214, 320),
('Brezza Antica', 'Marco Dea', 'Cronache Minime', 'Cantautorato', 1989, 268, 192),
('Un Giorno Qualunque', 'Marco Dea', 'Cronache Minime', 'Cantautorato', 2022, 238, 320),
('Piccoli Passi', 'Marco Dea', 'Diari', 'Cantautorato', 2012, 225, 256),
('Sogni di Metallo', 'Zero Line', 'Fratture', 'Elettronica', 1995, 203, 192),
('Riflessi Distorti', 'Zero Line', 'Fratture', 'Elettronica', 2019, 198, 256),
('Circuito Aperto', 'Zero Line', 'Volt', 'Elettronica', 2009, 254, 320),
('Canzone dell’Alba', 'Claudia F.', 'Orbita', 'Indie', 1982, 214, 192),
('Lune Spezzate', 'Claudia F.', 'Orbita', 'Indie', 2021, 227, 192),
('Polvere di Stelle', 'Claudia F.', 'Nebulose', 'Indie', 2018, 238, 256),
('Passi nel Fango', 'The Blue Frames', 'Volt', 'Rock', 1987, 230, 192),
('Corrente Alternata', 'The Blue Frames', 'Volt', 'Rock', 2018, 222, 256),
('Linea Dispersa', 'The Blue Frames', 'Frigidaire', 'Rock', 2001, 247, 320),
('Ossidiana', 'Rita Monaci', 'Minerali', 'Jazz', 1983, 312, 192),
('Nebbia sul Porto', 'Rita Monaci', 'Rotte', 'Jazz', 2015, 305, 320),
('Variazioni in Blu', 'Rita Monaci', 'Quaderni', 'Jazz', 1999, 289, 256),
('Cammini', 'Tommaso Verdi', 'Vie', 'Acustica', 1986, 261, 192),
('Passi Lenti', 'Tommaso Verdi', 'Vie', 'Acustica', 2018, 254, 320),
('Ritorno a Casa', 'Tommaso Verdi', 'Chitarre', 'Acustica', 2007, 243, 256),
('Vento del Nord', 'Stefano Mora', 'Frontiere', 'Folk', 1984, 221, 192),
('Cieli Grigi', 'Stefano Mora', 'Frontiere', 'Folk', 1991, 240, 192),
('Tra Due Monti', 'Stefano Mora', 'Frontiere', 'Folk', 2010, 261, 256),
('Sala d’Attesa', 'Giulio Terra', 'Terminal', 'Pop', 2021, 216, 320),
('Scalo 12', 'Giulio Terra', 'Terminal', 'Pop', 2019, 207, 256),
('Verso Sud', 'Giulio Terra', 'Rotte Interne', 'Pop', 2004, 199, 192),
('Cavi Scoperti', 'The Static Ends', 'Elettrolisi', 'Rock', 2017, 234, 256),
('Scariche', 'The Static Ends', 'Elettrolisi', 'Rock', 2011, 219, 192),
('Piccola Tempesta', 'The Static Ends', 'Elettrica', 'Rock', 2020, 225, 256),
('Linea d’Ombra', 'Glare', 'Penombra', 'Elettronica', 1992, 266, 192),
('Seconda Forma', 'Glare', 'Geometrie', 'Elettronica', 2018, 278, 320),
('Punto Cieco', 'Glare', 'Curve', 'Elettronica', 2006, 250, 256),
('Estensione', 'Silk Motion', 'Trame', 'Ambient', 2018, 310, 320),
('Seconda Forma', 'Proiezioni', 'Geometrie', 'Elettronica', 2018, 278, 320),
('Sapor di Mare', 'Clara Tosi', 'Riviera', 'Pop', 2016, 182, 256),
('Strati Sottili', 'Lorenzo D.', 'Piani', 'Cantautorato', 2019, 258, 320),
('Ultimo Sogno', 'Giada R.', 'Velature', 'Pop', 2023, 220, 192),
('Cavi Scoperti', 'The Static Ends', 'Elettrolisi', 'Rock', 2017, 234, 256),
('Estensione', 'Silk Motion', 'Trame', 'Ambient', 2018, 310, 320),
('Voli Bassi', 'Davide G.', 'Linea 2', 'Indie', 2021, 207, 256),
('Corrispondenze', 'Sonia Baldi', 'Cartoline', 'Pop', 2020, 213, 320);

-- check che sia tutto ok prima di fare l'esercizio
SELECT * FROM tracce_musicali;

-- 1) ordine alfabetico
SELECT * FROM tracce_musicali ORDER BY titolo ASC;
-- 2) solo un artista
SELECT * FROM tracce_musicali WHERE artista = "Laura Ritti";
-- 3) selezionare un genere
SELECT * FROM tracce_musicali WHERE genere = "pop";
-- 4) anno specifico
SELECT * FROM tracce_musicali WHERE anno = 2016;
-- 5) titolo artista e durata in minuti dalla piu lunga alla piu corta
SELECT titolo, artista, CONCAT(FLOOR(durata_secondi/60), ':', LPAD(durata_secondi%60, 2, '0')) AS durata_minuti FROM tracce_musicali ORDER BY durata_secondi DESC;
-- 6) contare numero tracce
SELECT COUNT(*) AS numero_tracce FROM tracce_musicali;
-- 7) contare numero di tracce per genere
SELECT genere, COUNT(*) AS numero FROM tracce_musicali GROUP BY genere ORDER BY numero DESC;
-- 8) trovare la traccia piu lunga e la traccia piu corta
SELECT 'più lunga' AS tipo, titolo, artista, durata_secondi
FROM tracce_musicali
WHERE durata_secondi = (SELECT MAX(durata_secondi) FROM tracce_musicali)

UNION ALL

SELECT 'più corta' AS tipo, titolo, artista, durata_secondi
FROM tracce_musicali
WHERE durata_secondi = (SELECT MIN(durata_secondi) FROM tracce_musicali);
-- 9) calcolo durata totale tracce
SELECT SEC_TO_TIME(SUM(durata_secondi)) AS durata FROM tracce_musicali;
-- 10) visualizzare tutte le tracce di un album specifico
SELECT * FROM tracce_musicali WHERE album = 'Orbita';
-- 11) cercare tutte le tracce con titolo contenente una parola specifica
SELECT * FROM tracce_musicali WHERE titolo LIKE '%forma%';
-- 12) visualizzare tracce rilasciate dopo 2020 ordine decrescente
SELECT * FROM tracce_musicali WHERE anno > 2020 ORDER BY anno DESC;
-- 13) artista con maggior numero di tracce (chatgpt è stupido e mi ha fatto ogni traccia un artista diverso)
SELECT artista, COUNT(*) AS numero_tracce FROM tracce_musicali GROUP BY artista ORDER BY numero_tracce DESC LIMIT 1;
-- 14)  trovare il genere con durata media di tracce piu lunga
SELECT genere, SEC_TO_TIME(AVG(durata_secondi)) AS durata_media FROM tracce_musicali GROUP BY genere ORDER BY durata_media DESC LIMIT 1;
-- 15) visualizzare tutte le tracce con durata sopra la media
SELECT * FROM tracce_musicali WHERE durata_secondi > (SELECT AVG(durata_secondi) FROM tracce_musicali) ORDER BY durata_secondi DESC;
-- 16) visualizzare numero tracce, durata totale e durata media per ogni genere (aggiunta da me ordinate per numero di tracce decrescente)
SELECT genere,
	COUNT(*) AS numero_tracce,
	SEC_TO_TIME(SUM(durata_secondi)) AS durata,
    SEC_TO_TIME(AVG(durata_secondi)) AS durata_media
    FROM tracce_musicali
    GROUP BY genere
    ORDER BY numero_tracce DESC;
-- 17) visualizzare numero di tracce, durata media per ogni artista, solo gli artisti con piu di 2 canzoni
SELECT artista,
	COUNT(*) AS numero_tracce,
    SEC_TO_TIME(AVG(durata_secondi)) AS durata_media
    FROM tracce_musicali
    GROUP BY artista
	HAVING COUNT(*) > 2
    ORDER BY numero_tracce DESC;
-- 18) trovare le tracce aggiunte al database nell'ultimo mese (non lo so fare forse mi è sfuggito dalle lezioni?)
-- SELECT * FROM tracce_musicali WHERE data_aggiunta > ??