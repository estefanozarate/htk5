package cs2031.utec.edu.pe.services;

import cs2031.utec.edu.pe.model.Person;
import cs2031.utec.edu.pe.repositories.GrupoRepository;
import cs2031.utec.edu.pe.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PersonService {
    @Autowired
    private PersonRepository repository;
    @Autowired
    private GrupoRepository grupoRepository;

    public void create(Person person){
        repository.save(person);
    }

    public Person read(Long id) {
        return repository.findById(id).get();
    }

    public List<Person> read(){
    	List<Person> lista = repository.findAll();
    	
    	for(Person p : lista) {
    		p.setGroups(grupoRepository.findByIdPersons(p.getId()));
    	}
    	
        return lista;
    }

    public Person update(Long id, Person p){
        return repository.save(p);
    }



    public void delete(Long id){
        Person person;
        person = repository.findById(id).get();
    }

}
