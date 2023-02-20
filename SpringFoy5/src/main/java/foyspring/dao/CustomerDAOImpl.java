package foyspring.dao;


import java.util.List;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import foyspring.entity.Customer;

@Repository
public class CustomerDAOImpl implements CustomerDAO {

	
    @Autowired
    private SessionFactory sessionFactory ; 
    private Configuration cfg;
    
    public CustomerDAOImpl() {
    	System.out.println("Şimdi nesne oluşturuyorum");
    	this.cfg = new Configuration();
    	this.sessionFactory = this.cfg.configure("foyspring/dao/hibernate.cfg.xml").buildSessionFactory();
    }
    
    @Override
    public List < Customer > getCustomers() {
        System.out.println("\n adım 1 \n");
        
        System.out.println("şu an session factory : " + this.sessionFactory);
        Session session = this.sessionFactory.getCurrentSession();
        System.out.println("\n adım 2 :  "+ session);
        System.out.println("\n adım 2 \n");
        CriteriaBuilder cb = session.getCriteriaBuilder();
        CriteriaQuery < Customer > cq = cb.createQuery(Customer.class);
        Root < Customer > root = cq.from(Customer.class);
        cq.select(root);
        Query query = session.createQuery(cq);
        return query.getResultList();
    }  
    // 
    // Bunu ben ekledim
    /* 
	@SuppressWarnings("unchecked")
	@Override
	public List<Customer> listPersons() {
		Session session = this.sessionFactory.getCurrentSession();
		List<Customer> cList = session.createQuery("SELECT * FROM weblab.customer;").list();
		for(Customer c : cList){
			System.out.println("Person List::" + c.toString());
		}
		return cList;
	}
	*/ 

    @Override
    public void deleteCustomer(int id) {
        Session session = sessionFactory.getCurrentSession();
        Customer book = session.byId(Customer.class).load(id);
        session.delete(book);
    }

    @Override
    public void saveCustomer(Customer theCustomer) {
        Session currentSession = sessionFactory.getCurrentSession();
        currentSession.saveOrUpdate(theCustomer);
    }

    @Override
    public Customer getCustomer(int theId) {
        Session currentSession = sessionFactory.getCurrentSession();
        Customer theCustomer = currentSession.get(Customer.class, theId);
        return theCustomer;
    }
}