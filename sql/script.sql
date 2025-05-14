CREATE TABLE clients (
	id SERIAL PRIMARY KEY,
	cpf TEXT NOT NULL UNIQUE,
	name TEXT NOT NULL
);

CREATE TABLE phones (
	id SERIAL PRIMARY KEY,
	number TEXT NOT NULL UNIQUE,
	cpf TEXT NOT NULL REFERENCES clients(cpf),
	carrier_id INT NOT NULL REFERENCES carriers(id),
	description TEXT NOT NULL
);

CREATE TABLE recharges (
	id SERIAL PRIMARY KEY,
	phone_id INT NOT NULL REFERENCES phones(id),
	value INT NOT NULL
);