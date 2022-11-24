package br.com.streaming.saver.repository;

import br.com.streaming.saver.entity.Serie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SerieRepository extends JpaRepository<Serie, Long> {
}
