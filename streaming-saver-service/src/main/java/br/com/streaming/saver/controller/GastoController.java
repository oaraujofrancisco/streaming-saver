package br.com.streaming.saver.controller;

import br.com.streaming.saver.entity.Gasto;
import br.com.streaming.saver.service.GastoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/gastos")
public class GastoController {

    private final GastoService gastoService;

    public GastoController(GastoService gastoService) {
        this.gastoService = gastoService;
    }


    @GetMapping
    public ResponseEntity<List<Gasto>> buscarTodos(
            @RequestParam(value = "tipo-gasto", defaultValue = "") String tipoGasto
    ) {
        return ResponseEntity.ok(gastoService.buscarTodos(tipoGasto));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Gasto> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(gastoService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Gasto> salvarGasto(@RequestBody Gasto gasto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(gastoService.salvarGasto(gasto));
    }

    @PutMapping("{id}")
    public ResponseEntity<Gasto> atualizarGasto(@PathVariable Long id, @RequestBody Gasto gasto) {
        return ResponseEntity.ok(gastoService.atualizarGasto(id, gasto));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Gasto>> excluirGasto(@PathVariable Long id) {
        return ResponseEntity.ok(gastoService.excluirGasto(id));
    }

}
