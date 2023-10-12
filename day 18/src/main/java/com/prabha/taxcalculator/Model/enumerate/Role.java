package com.prabha.taxcalculator.Model.enumerate;

import static com.prabha.taxcalculator.Model.enumerate.Permission.ADMIN_CREATE;
import static com.prabha.taxcalculator.Model.enumerate.Permission.ADMIN_DELETE;
import static com.prabha.taxcalculator.Model.enumerate.Permission.ADMIN_READ;
import static com.prabha.taxcalculator.Model.enumerate.Permission.ADMIN_UPDATE;
import static com.prabha.taxcalculator.Model.enumerate.Permission.VENDOR_CREATE;
import static com.prabha.taxcalculator.Model.enumerate.Permission.VENDOR_DELETE;
import static com.prabha.taxcalculator.Model.enumerate.Permission.VENDOR_READ;
import static com.prabha.taxcalculator.Model.enumerate.Permission.VENDOR_UPDATE;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {
    ADMIN(Set.of(
            ADMIN_READ,
            ADMIN_CREATE,
            ADMIN_UPDATE,
            ADMIN_DELETE,
            VENDOR_READ,
            VENDOR_CREATE,
            VENDOR_UPDATE,
            VENDOR_DELETE)),
            
    VENDOR(Set.of(
            VENDOR_READ,
            VENDOR_CREATE,
            VENDOR_UPDATE,
            VENDOR_DELETE));

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthority() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        for (Permission permission : getPermissions()) {
            authorities.add(new SimpleGrantedAuthority(permission.getPermission()));
        }

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
