package by.dapo.backend.models.entities;

import by.dapo.backend.models.constants.TableName;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = TableName.USERS)
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column
    private String password;
}
