import {screen, render} from '@testing-library/react';
import * as brandService from './../services/BrandService';

// arrange
// act
// assert

describe('brandServiceTest', ()=>{
    
    beforeEach(()=>{

    });

    beforeAll(()=>{
        
    });

    afterEach(()=>{

    });

    afterAll(()=>{

    });

    test('getAllBrandsTest', async ()=>{
        
        //await expect(brandService.getAllBrands()).resolves.toBeGreaterThan(0);
        const data = await brandService
        .getAllBrands()
        .then((response)=> response.json());
         expect(data.length).toBeGreaterThan(0);
    
    });

});


