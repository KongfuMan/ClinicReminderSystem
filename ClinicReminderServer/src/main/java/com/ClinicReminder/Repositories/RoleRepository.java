package com.ClinicReminder.Repositories;

import com.ClinicReminder.Models.Security.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role,Integer> {
    public Role findByName(String roleName);

    @Query(value = "SELECT Role.* " +
            "FROM User, Role " +
            "WHERE User.role_id = Role.role_id AND User.user_name = ?1", nativeQuery = true)
    public Role findRoleNameByUserName(String userName);

}
