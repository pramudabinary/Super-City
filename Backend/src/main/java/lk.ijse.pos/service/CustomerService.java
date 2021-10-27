package lk.ijse.pos.service;

import lk.ijse.pos.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerService {
    boolean addCustomer(CustomerDTO dto);

    void deleteCustomer(String id);

    CustomerDTO searchCustomer(String id);

    ArrayList<CustomerDTO> getAllCustomers();

    boolean updateCustomer(CustomerDTO dto);
}
