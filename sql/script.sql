CREATE TABLE phones (
	id SERIAL PRIMARY KEY,
	number TEXT NOT NULL UNIQUE,
	name TEXT NOT NULL,
	cpf TEXT NOT NULL,
	carrier_id INT NOT NULL REFERENCES carriers(id),
	description TEXT NOT NULL
);

CREATE TABLE recharges (
	id SERIAL PRIMARY KEY,
	phone_id INT NOT NULL REFERENCES phones(id),
	value INT NOT NULL
);