-- database: 'detox_app',



CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY ,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (80) NOT NULL,
    "clearance_level" INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "detox" (
    "id" SERIAL PRIMARY KEY,
    "detox_id" INT REFERENCES "person",
    "detox_center_name" VARCHAR (80) NOT NULL,
    "address" VARCHAR (80) NOT NULL,
    "city" VARCHAR (80) NOT NULL,
    "state" VARCHAR (80) NOT NULL,
    "zip" INT NOT NULL,
    "total_bed_count" INT NOT NULL,
    "current_bed_count" INT NOT NULL,
    "lat" FLOAT NOT NULL,
    "lng" FLOAT NOT NULL
);






