package org.dementia.hackathon.controllers;

import org.dementia.hackathon.model.Memory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.swing.plaf.metal.MetalMenuBarUI;

@Controller
public class MemoryFormController {

    @PostMapping("/creatememory")
    public String handleForm(@ModelAttribute Memory memory,
                             ModelMap modelMap) {
        System.out.println(memory.getDescription());
        System.out.println(memory.getImage().getName());

        return "redirect:/portfolio";
    }
}
