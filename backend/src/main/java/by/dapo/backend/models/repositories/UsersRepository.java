package by.dapo.backend.models.repositories;

import by.dapo.backend.models.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<User, Long> {
    public User getUserByEmail(String email);
}
