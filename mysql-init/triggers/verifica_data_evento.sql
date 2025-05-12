delimiter //

create trigger verifica_data_evento
before insert on ingresso_compra
for each row
begin
    declare data_evento datetime;

-- buscar data do evento
    select e.data_hora into data_evento 
    from ingresso i
    join 
    evento e on i.fk_id_evento = e.id_evento 
    where i.id_ingresso = new.fk_id_ingresso;