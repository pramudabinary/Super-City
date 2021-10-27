package lk.ijse.pos.service.impl;


import lk.ijse.pos.dto.CustomerDTO;
import lk.ijse.pos.entity.Customer;
import lk.ijse.pos.repo.CustomerRepo;
import lk.ijse.pos.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getId())) {
            throw new RuntimeException("Customer Already Exist");
        }
        customerRepo.save(mapper.map(dto, Customer.class));
        return true;
    }

    @Override
    public void deleteCustomer(String id) {

    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        return null;
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomers() {

        List<Customer> all = customerRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<CustomerDTO>>(){}.getType());

    }


    @Override
    public boolean updateCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getId())) {
            customerRepo.save(mapper.map(dto, Customer.class));
            return true;
        }
        return false;
    }
}
