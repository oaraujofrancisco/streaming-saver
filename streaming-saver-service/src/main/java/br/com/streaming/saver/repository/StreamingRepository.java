package br.com.streaming.saver.repository;

import br.com.streaming.saver.entity.Streaming;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StreamingRepository extends JpaRepository<Streaming, Long> {

}
