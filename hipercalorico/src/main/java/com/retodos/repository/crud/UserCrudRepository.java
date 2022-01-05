package com.retodos.repository.crud;

import com.retodos.model.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author jquiroga
 */

public interface UserCrudRepository extends MongoRepository<User, Object> {
    public Optional<User> findByEmail(String email);
    public Optional<User> findByEmailAndPassword(String email, String password);
        //Reto 5
    List<User> findByMonthBirthtDay(String monthBirthtDay);
    
    //Para seleccionar el usuario con el id maximo
    //Corresponde a esta consulta de mongodb: db.usuarios.find().limit(1).sort({$natural:-1})
    Optional<User> findTopByOrderByIdDesc();
}
