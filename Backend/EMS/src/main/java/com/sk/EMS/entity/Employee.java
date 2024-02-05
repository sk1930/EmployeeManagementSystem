package com.sk.EMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;



//let us make this employ class as a JPA
//entity by using JPA annotations so let us
//annotate this class with @ entity
//annotation from  jakarta.persistence

//next let us

//annotate this class with @ table
//annotation from jakarta.persistence package to sepcify table details


/*next let us configure the primary key for this employee entity
so here let us annotate the ID field
with @ ID annotation so make sure that
you choose ID annotation from jakarta.persistence
 package
*/
/*
 next let us configure
 the primary key generation
strategy for that let us use add
generated value
3:12
annotation and next @ generated value
annotation has a strategy attribute so

here let us configure the primary key
3:20
generation type so here let us use
3:23
identity so this identity primary key*/

@Getter //to get getters
@Setter // to get setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    // non null and unique

    @Column(name="email_id",nullable = false,unique=true)
    private String email;
}
