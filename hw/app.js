
    function createChristmasTree(levels) {
        const treeContainer = document.getElementById('christmasTree');

        for (let i = 0; i < levels; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            const triangle = document.createElement('div');
            triangle.classList.add('triangle');
            row.appendChild(triangle);

            treeContainer.appendChild(row);
        }

        const trunk = document.createElement('div');
        trunk.classList.add('trunk');
        treeContainer.appendChild(trunk);
    }

    createChristmasTree(5); 
