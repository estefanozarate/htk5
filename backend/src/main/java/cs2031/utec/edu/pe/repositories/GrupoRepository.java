package cs2031.utec.edu.pe.repositories;
import cs2031.utec.edu.pe.model.Grupo;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface GrupoRepository extends JpaRepository<Grupo, Long> {
	
	@Query(value = "select * from Groups where id in "
			+ " (SELECT group_id from person_group where person_id = ?)" ,nativeQuery = true)
	public Set<Grupo> findByIdPersons(Long idPerson);
}