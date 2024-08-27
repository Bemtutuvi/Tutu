create table Clientes(
id_cliente int8 primary key,
nome_cliente varchar(255) not null,
end_cliente varchar(255),
cidade_cliente varchar(255),
uf_cliente char(2)
);

insert into Clientes(id_cliente,nome_cliente,end_cliente,cidade_cliente,uf_cliente)
values(1,'Rich', 'Rua da Saudade', 'Nova Andradina', 'MS'),
(2,'Veronica', 'Rua Costa e Silva', 'Pindamoiangaba', 'MG'),
(3,'Alexander', 'Rua Irineu Silva', 'Campo Grande', 'MS'),
(4,'Caio', 'Av. Alcidez Menezes', 'Andradina', 'SP'),
(5,'Julia', 'Rua Deusdete', 'Salvador', 'BA');

create table vendedores(
id_vendedor int8 primary key,
nome_vendedor varchar(255) not null,
matricula_vendedor varchar(255) not null,
data_nascimento date not null
);
insert into vendedores(id_vendedor,nome_vendedor,matricula_vendedor,data_nascimento)
values(1,'Jorge',2222, '1998-12-12'),
(2,'Janaina',3333, '1997-11-11'),
(3,'Jeferson',4444, '1999-10-09'),
(4,'Rosineide',7777, '2001-06-08'),
(5,'Weslley',1111, '2000-08-04');

create table produtos(
id_produto int8 primary key,
nome_produto varchar(255),
data_fabricacao date,
validade date
);

insert into produtos(id_produto,nome_produto,data_fabricacao,validade)
values(1,'Bolacha','2024-06-06','2024-08-08'),
(2,'Refrigerante','2024-06-06','2024-10-08'),
(3,'Cama','2022-06-06','2030-08-08'),
(4,'Rojão','2021-06-06','2026-08-08'),
(5,'Cueca','2020-06-06','2050-08-08');

create table vendas(
id_venda int8 primary key,
data_venda timestamp,
id_vendedor varchar(255) not null,
id_produto varchar(255) not null,
id_cliente int,
foreign key(id_cliente) references Clientes(id_cliente),
foreign key(id_vendedor) references vendedores(id_vendedor),
foreign key(id_produto) references produtos(id_produto)
);

insert into vendas(id_venda, data_venda,id_vendedor,id_produto,id_cliente)
values(1,'2024-08-08 16:00', 1, 1, 1),
(2,'2024-07-07 19:00', 2, 2, 2),
(3,'2024-06-06 13:00', 3, 3, 3),
(4,'2024-05-05 14:00', 4, 4, 4),
(5,'2024-04-04 15:00', 5, 5, 5);