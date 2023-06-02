create database dorixona;


create table region (id int primary key,
    name varchar(50));

create table district (id int primary key,
    name varchar(50),
    region_id int);

create table stock (id int primary key,
    medicine_id int,
    pharmacy_id int,
    qunatity int);

create table drug_type (id int primary key,
    name varchar(50));


create table drugs (id int primary key,
    name varchar(50),
    manufacturer varchar(50),
    medicine_type int,
    price float,
    expiry_date date,
    info text);

create table pharmacies (id int primary key,
    name varchar(50),
    address varchar(50),
    location varchar(50),
    phone varchar(50),
    email varchar(50),
    region_id int,
    district_id int);

insert into pharmacies (id, name, address,location,phone,email,region_id,district_id)
values
(1,"Dori bor", "Navoi 14", "Cilonzor 8kavart", "9999999", "doribor@gmail.com", 1,1);


insert into drugs (id,name,manufacturer,medicine_type,price,expiry_date,info)
values (1,"Kyupen", "klyupen", 1, 1000.5, "2024/11/04", "Yaxshi dori")