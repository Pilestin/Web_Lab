package foyspring.dao;

import java.util.List;

import foyspring.entity.Customer;

public interface CustomerDAO {

    public List < Customer > getCustomers();
    
    // public List < Customer > listPersons();

    public void saveCustomer(Customer theCustomer);

    public Customer getCustomer(int theId);

    public void deleteCustomer(int theId);
    
    
}