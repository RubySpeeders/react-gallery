CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" varchar (120) NOT NULL,
	"description" varchar (400) NOT NULL,
	"likes" integer
	);
	
INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/cherry_blossoms.jpg', 'Cherry blossoms in the city.', 0),
('images/winter_runner.jpg', 'Man running through winter snow.', 0);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/fire_city.jpg', 'City vs country. Wildfires near the city in California.', 0), ('images/kiwis.jpg', 'Sliced kiwis and walnuts.', 0), ('images/lotus_flower.jpg', 'Lotus flower, like MY Loudis flower!', 0), ('images/miami_beach.jpg', 'Storm rolling into South Beach', 0);