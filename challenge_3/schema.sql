CREATE DATABASE shoppingCheckout;

USE shoppingCheckout;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name text not null,
  email text not null,
  password text not null,
  line1 text not null,
  line2 text not null,
  city text not null,
  state text not null,
  zipCode text not null,
  creditCard text not null,
  expDate text not null,
  cvv text not null,
  billingZip text not null
);