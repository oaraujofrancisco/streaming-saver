package br.com.streaming.saver.controller;

import br.com.streaming.saver.entity.Streaming;
import br.com.streaming.saver.service.StreamingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/assinaturas")
public class StreamingController {

    private final StreamingService streamingService;

    public StreamingController(StreamingService streamingService) {
        this.streamingService = streamingService;
    }

    @GetMapping
    public ResponseEntity<List<Streaming>> buscarTodos(
            @RequestParam(value = "tipo-gasto", defaultValue = "streaming") String tipoStreaming
    ) {
        return ResponseEntity.ok(streamingService.buscarTodos(tipoStreaming));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Streaming> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(streamingService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Streaming> salvarStreaming(@RequestBody Streaming streaming) {
        return ResponseEntity.status(HttpStatus.CREATED).body(streamingService.salvarStreaming(streaming));
    }

    @PutMapping("{id}")
    public ResponseEntity<Streaming> atualizarStreaming(@PathVariable Long id, @RequestBody Streaming streaming) {
        return ResponseEntity.ok(streamingService.atualizarStreaming(id, streaming));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Streaming>> excluirStreaming(@PathVariable Long id) {
        return ResponseEntity.ok(streamingService.excluirStreaming(id));
    }
}
