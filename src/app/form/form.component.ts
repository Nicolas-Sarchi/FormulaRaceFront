import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
    category: [''],
    nombre: [''],
  precio: [''],
  stock: [''],
  });

  categories: any[] = [];  

  constructor(
    private _formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }
  onSubmit() {
    const formValue = this.options.value;
    this.productService.create(formValue).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Completado');
      }
    });
    
  }
    

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (data: any[]) => {
        this.categories = data;
      },
      error: (error: any) => {
        console.error('Error loading categories', error);
      }
    });}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  updateItem(index: number) {
    const item = this.items[index];
    this.productService.update(item).subscribe({
      next: (res) => {
        // actualizar los datos en la tabla si es necesario
        console.log('Actualización exitosa', res);
      },
      error: (err) => {
        console.error('Error al actualizar', err);
      },
      complete: () => {
        console.log('Completado');
      }
    });
  }

  
  deleteItem(index: number) {
    const item = this.items[index];
    this.productService.delete(item.id).subscribe({
      next: (res) => {
        this.items.splice(index, 1);
        console.log('Eliminación exitosa', res);
      },
      error: (err) => {
        console.error('Error al eliminar', err);
      },
      complete: () => {
        console.log('Completado');
      }
    });
  }
    
}
