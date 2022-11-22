CREATE TABLE Categoria (
    idCategoria INTEGER PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(40) NOT NULL
);
CREATE TABLE Marca(
    idMarca INTEGER PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(40) NOT NULL
);
CREATE TABLE Docente(
    idDocente INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    apellidoPaterno VARCHAR(40) NOT NULL,
    apellidoMaterno VARCHAR(40) NOT NULL,
    numeroCelular VARCHAR(40) NOT NULL,
    grado VARCHAR(40) NOT NULL,
    seccion VARCHAR(40) NOT NULL
);
CREATE TABLE Usuario(
    idUsuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    password VARCHAR(8) NOT NULL,
    apellidoPaterno VARCHAR(40) NOT NULL,
    apellidoMaterno VARCHAR(40) NOT NULL,
    numeroCelular VARCHAR(40) NOT NULL,
    rol VARCHAR(40) NOT NULL
);
CREATE TABLE EquipoInformatico (
    idEquipo INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) NOT NULL,
    descripcion VARCHAR(40) NOT NULL,
    numeroSerie VARCHAR(40) NOT NULL,
    estado VARCHAR(40) NOT NULL,
    disponibilidad VARCHAR(120) NOT NULL,
    categoria INTEGER, FOREIGN KEY(categoria) REFERENCES Categoria(idCategoria),
    marca INTEGER, FOREIGN KEY(marca)  REFERENCES Marca(idMarca)
);

CREATE TABLE EquipoPrestamo(
    idEquipoPrestamo INTEGER PRIMARY KEY AUTO_INCREMENT,
    equipo INTEGER, FOREIGN KEY(equipo)  REFERENCES EquipoInformatico(idEquipo),
    prestamo INTEGER, FOREIGN KEY(prestamo)  REFERENCES Prestamo(idPrestamo)
);
CREATE TABLE Prestamo(
    idPrestamo INTEGER PRIMARY KEY AUTO_INCREMENT,
    fecha  DATE NOT NULL,
    horaPrestamo TIME NOT NULL,
    horaDevolucion TIME NOT NULL,
    estado VARCHAR(40) NOT NULL,
    docente INTEGER, FOREIGN KEY(docente)  REFERENCES Docente(idDocente),
    usuario INTEGER, FOREIGN KEY(usuario)  REFERENCES Usuario(idUsuario)
);

CREATE TABLE Incidencia(
    idIncidencia INTEGER PRIMARY KEY AUTO_INCREMENT,
    fecha  DATE NOT NULL,
    hora TIME NOT NULL,
    descripcion VARCHAR(40) NOT NULL,
    usuario INTEGER, FOREIGN KEY(usuario)  REFERENCES Usuario(idUsuario),
    equipo INTEGER, FOREIGN KEY(equipo)  REFERENCES EquipoInformatico(idEquipo)
);


CREATE TRIGGER `incidencias` AFTER INSERT ON `incidencia`
 FOR EACH ROW UPDATE equipoinformatico set disponibilidad = 'No' 
WHERE idEquipo = NEW.equipo;

CREATE TRIGGER `prestamos` AFTER INSERT ON `prestamo`
 FOR EACH ROW UPDATE equipoinformatico set disponibilidad = 'No' 
WHERE idEquipo = NEW.equipo;