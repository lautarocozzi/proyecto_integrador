package com.mrInstruments.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mrInstruments.backend.dto.CategoryDto;
import com.mrInstruments.backend.entities.Category;
import com.mrInstruments.backend.repository.CategoryRepository;
import com.mrInstruments.backend.service.CategoryService;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@WebMvcTest
class CategoryControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//    @MockBean
//    private CategoryService categoryService;
//    @Autowired
//    private ObjectMapper objectMapper;
//    private CategoryDto cat1;
//    private CategoryDto cat2;
//    @BeforeEach
//    @DisplayName("Cargando Data")
//    void setup(){
//        cat1 = new CategoryDto("Cordofonos","vibracion de cuerdas","url-img");
//        cat2 = new CategoryDto("Percusion","decrip","url-img");
//
//    }
//    @Test
//    void createCategory() throws Exception {
//        //given
//        given(categoryService.createCategory(any(CategoryDto.class))).willAnswer(invocationOnMock -> invocationOnMock.getArgument(0));
//
//        //when
//        ResultActions response = mockMvc.perform(post("/categorias")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(objectMapper.writeValueAsString(cat1)));
//        //then
//        response.andDo(print())
//                .andExpect(status().isCreated())
//                .andExpect(jsonPath("$.titulo").isString())
//                .andExpect(jsonPath("$.titulo").isNotEmpty())
//                .andExpect(jsonPath("$.titulo").value(cat1.getTítulo()))
//                .andExpect(jsonPath("$.descripcion").isString())
//                .andExpect(jsonPath("$.descripcion").isNotEmpty())
//                .andExpect(jsonPath("$.descripcion").value(cat1.getDescripción()));
//
//    }
//
//    @Test
//    void searchCategory() {
//    }
//
//    @Test
//    void deleteCategory() {
//    }
//
//    @Test
//    void listCategory() {
//    }
//
//    @Test
//    void updateCategory() {
//    }
}